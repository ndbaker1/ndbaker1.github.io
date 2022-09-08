<!-- 
  Command Palette inspired by Monkeytype.com
 -->
<script lang="ts">
  import { onMount } from 'svelte';

  import { writable } from 'svelte/store';
  import { blur } from 'svelte/transition';

  import { focusOnVisible } from '$lib/actions/focusOnVisible.action';
  import { clickOutside } from '$lib/actions/outsideClick.action';

  import Window from './Window.svelte';

  import { CommandPaletteService, CommandStatus } from 'addons/services/command-palette';
  import { KeyMaps } from 'addons/services/keymap';
  import { themes } from 'addons/services/theme';

  const commandPaletteService = new CommandPaletteService();

  for (const theme of themes) {
    commandPaletteService.registerCommand({
      path: ['🎨 theme', theme.name],
      func: () => theme.setCurrent(),
    });
  }

  commandPaletteService.registerCommand({
    path: ['📄 resume'],
    func: () => window.open('/resume'),
  });

  const showing = writable(false);
  const searchResults = writable([]);
  let searchString = '';
  let pathString = [];
  let selectedIndex = 0;

  clickOutside(() => showing.set(false));

  function updateResults() {
    const augmentedPath = pathString.concat(searchString);
    const searchReponse = commandPaletteService.search(augmentedPath);
    searchResults.set(searchReponse);
  }

  function handleChoice(choice: string) {
    const augmentedPath = pathString.concat(choice);

    searchString = '';

    switch (commandPaletteService.execute(augmentedPath)) {
      case CommandStatus.SubCommands:
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
        searchResults.set(commandPaletteService.search(['']));
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
  <span transition:blur id="backdrop">
    <Window position={{ top: '8rem' }} on:close-window={() => showing.set(false)}>
      <div id="command-bar">
        <input
          autocomplete="off"
          placeholder="Search"
          use:focusOnVisible
          bind:value={searchString}
          on:input={updateResults}
          on:introstart={updateResults}
        />
        {#each $searchResults as result, i}
          <p
            class="search-result {i === selectedIndex ? 'selected' : ''}"
            on:click={() => handleChoice(result)}
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
    font-size: var(--small-text);
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
