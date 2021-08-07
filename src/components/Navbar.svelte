<script>
  import { showThemePickerStore } from '../services/storage.service'

  import ColorSwitcher from './ColorSwitcher.svelte'
  import Window from './Window.svelte'

  let showThemePicker
  showThemePickerStore.subscribe((show) => (showThemePicker = show))
</script>

<div id="navbar">
  <header class="bar themed">
    <a id="name" href="./"> 🍣 Nick Baker </a>
    <div id="navigation" class="grid grid-cols-2 gap-3">
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      {#if showThemePicker}
        <Window on:close-window={() => showThemePickerStore.set(false)}>
          <ColorSwitcher />
        </Window>
      {/if}
    </div>
  </header>
</div>

<style>
  .bar {
    color: var(--text-color);
    z-index: 99;
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: space-between;

    font-size: 1.6rem;
  }

  .bar a,
  button {
    transition: 300ms;
  }
  .bar a:hover,
  button:hover {
    color: var(--text-color-hover);
  }
</style>
