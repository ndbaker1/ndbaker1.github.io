<script>
  import { fly } from 'svelte/transition'

  import { showThemePickerStore } from '../services/globals.service'
  import ColorSwitcher from './ColorSwitcher.svelte'
  import Window from './Window.svelte'

  let scrollY

  let showThemePicker
  showThemePickerStore.subscribe((show) => (showThemePicker = show))
</script>

<svelte:window bind:scrollY />

<div id="navbar" class="themed">
  {#if scrollY < 100}
    <header transition:fly class="bar themed fixed grid text-left  p-6">
      <a id="name" href="./" class="text-2xl"> 🍣 Nick Baker </a>
      <p>type ":help" to see commands</p>
    </header>
  {/if}
  {#if showThemePicker}
    <Window on:close-window={() => showThemePickerStore.set(false)}>
      <ColorSwitcher />
    </Window>
  {/if}
</div>

<style>
  .bar {
    z-index: 99;
  }

  .bar a {
    transition: 300ms;
  }
  .bar a:hover {
    color: var(--text-color-hover);
  }
</style>
