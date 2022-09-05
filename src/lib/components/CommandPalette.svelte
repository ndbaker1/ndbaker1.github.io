<!-- 
  Command Palette inspired by Monkeytype.com
 -->
<script lang="ts">
  import { onMount } from 'svelte';

  import { focusOnVisible } from '$lib/actions/focusOnVisible.action';
  import { CommandPaletteService } from '$lib/services/command-palette.service';

  import Window from './Window.svelte';

  const commandPaletteService = new CommandPaletteService();

  commandPaletteService.registerCommand({
    key: 'theme',
    func: () => '',
  });
  commandPaletteService.registerCommand({
    key: 'anime',
    func: () =>
      window.open('https://drive.google.com/file/d/1cmAtaKf69lU6dbBZfXnjsK_MecVnA46K/view'),
  });

  // extract stores
  const {
    bar: { show },
    commandResults,
  } = commandPaletteService;
  // extract writable values
  let { searchText } = commandPaletteService;

  onMount(() => commandPaletteService.init());
</script>

<!-- Command Bar -->
{#if $show}
  <span id="backdrop" />
  <Window escapeKeys={[]} on:close-window={() => show.set(false)}>
    <input
      id="command-bar"
      class="w-full text-md"
      autocomplete="off"
      placeholder="Search"
      use:focusOnVisible
      bind:value={searchText}
      on:keypress={commandPaletteService.keyHandler}
    />
    {#each $commandResults as result}
      <p>{result}</p>
    {/each}
  </Window>
{/if}

<style>
  #command-bar {
    font-family: 'Fira Code', monospace;
    z-index: 99;
    background-color: var(--bg-color);
    color: var(--text-color);
    outline: none;
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
