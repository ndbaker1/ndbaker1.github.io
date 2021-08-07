<script>
  import { showThemePickerStore } from '../services/globals.service'

  import ColorSwitcher from './ColorSwitcher.svelte'
  import Window from './Window.svelte'

  let showThemePicker
  showThemePickerStore.subscribe((show) => (showThemePicker = show))
</script>

<div id="navbar" class="themed text-2xl">
  <header class="bar themed">
    <a id="name" href="./"> 🍣 Nick Baker </a>
  </header>
  {#if showThemePicker}
    <Window on:close-window={() => showThemePickerStore.set(false)}>
      <ColorSwitcher />
    </Window>
  {/if}
</div>

<style>
  .bar {
    color: var(--text-color);
    z-index: 99;
    position: fixed;
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    justify-content: space-between;
  }

  .bar a {
    transition: 300ms;
  }
  .bar a:hover {
    color: var(--text-color-hover);
  }
</style>
