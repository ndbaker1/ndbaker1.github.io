<!-- 
  Command Palette inspired by Monkeytype.com
 -->
<script lang="ts">
  import { onMount } from 'svelte';

  import { writable } from 'svelte/store';
  import { blur } from 'svelte/transition';

  import { focusOnVisible } from '$lib/actions/focusOnVisible.action';

  import Window from './Window.svelte';

  import {
    CommandPaletteService,
    SelectionResponse,
    type SelectionItem,
  } from 'addons/services/command-palette';
  import { KeyMaps } from 'addons/services/keymap';
  import { ThemeService } from 'addons/services/theme';

  const paletteItems: SelectionItem[] = [
    ...ThemeService.PRESETS.map((theme) => ({
      pathItems: ['theme', theme.name],
      action: () => ThemeService.setCurrent(theme),
    })),
    {
      pathItems: ['resume'],
      action: () => window.open('/resume'),
    },
    {
      pathItems: ['github'],
      action: () => window.open('https://github.com/ndbaker1'),
    },
  ];

  const commandPaletteService = new CommandPaletteService();
  paletteItems.forEach((item) => commandPaletteService.registerItem(item));

  const showing = writable(false);
  const searchResults = writable([]);

  let searchString = $state('');
  let pathString = [];
  let selectedIndex = $state(0);

  function updateResults() {
    const augmentedPath = pathString.concat(searchString);
    const searchReponse = commandPaletteService.query(augmentedPath);
    searchResults.set(searchReponse);
  }

  function handleChoice(choice: string) {
    const augmentedPath = pathString.concat(choice);

    searchString = '';

    switch (commandPaletteService.execute(augmentedPath)) {
      case SelectionResponse.SubCommands:
        pathString.push(choice);
        updateResults();
        break;
      default:
        showing.set(false);
    }
  }

  onMount(() => {
    KeyMaps.register(['Escape'], () =>
      showing.update((stat) => {
        pathString = [];
        searchString = '';
        selectedIndex = 0;
        searchResults.set(commandPaletteService.query(['']));
        return !stat;
      })
    );

    KeyMaps.register(['Enter'], () => {
      if ($showing) handleChoice($searchResults[selectedIndex]);
    });

    KeyMaps.register(['ArrowUp'], () => {
      if ($showing) selectedIndex = Math.max(selectedIndex - 1, 0);
    });

    KeyMaps.register(['ArrowDown'], () => {
      if ($showing) selectedIndex = Math.min(selectedIndex + 1, $searchResults.length - 1);
    });

    return KeyMaps.cleanup;
  });
</script>

<!-- Command Bar -->
{#if $showing}
  <span transition:blur|global id="backdrop">
    <Window position={{ top: '8rem' }} on:close-window={() => showing.set(false)}>
      <div id="command-bar">
        <input
          autocomplete="off"
          placeholder="Search"
          use:focusOnVisible
          bind:value={searchString}
          oninput={updateResults}
          onintrostart={updateResults}
        />
        {#each $searchResults as result, i}
          <p
            class="search-result {i === selectedIndex ? 'selected' : ''}"
            onclick={() => handleChoice(result)}
            onkeypress={() => 0}
          >
            {result}
          </p>
        {/each}
      </div>
    </Window>
  </span>
{/if}

<style>
  #command-bar {
    font-family: 'Fira Code', monospace;
    z-index: 99;
    background-color: var(--bg-color);
    color: var(--text-color);
  }

  #command-bar > input {
    min-width: 50vw;
    padding: 1rem;
    outline: none;
    background-color: inherit;
  }

  #command-bar .search-result {
    padding: 0.5rem;
    font-size: var(--text-small);
  }

  #command-bar .search-result:hover,
  .selected {
    background-color: var(--button-bg-color-hover);
    cursor: pointer;
  }

  #backdrop {
    width: 100vw;
    height: 100vh;
    background-color: #0009;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
