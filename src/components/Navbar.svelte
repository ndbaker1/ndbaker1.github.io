<script>
  import { showThemePickerStore } from '../services/globals.service'

  import ColorSwitcher from './ColorSwitcher.svelte'
  import Window from './Window.svelte'

  let showThemePicker
  showThemePickerStore.subscribe((show) => (showThemePicker = show))
</script>

<div id="navbar">
  <header class="bar themed">
    <a id="name" href="./"> 🍣 Nick Baker </a>

    {#if showThemePicker}
      <Window on:close-window={() => showThemePickerStore.set(false)}>
        <ColorSwitcher />
      </Window>
    {/if}
  </header>
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

    font-size: 1.6rem;
  }

  .bar a {
    transition: 300ms;
  }
  .bar a:hover {
    color: var(--text-color-hover);
  }
</style>
