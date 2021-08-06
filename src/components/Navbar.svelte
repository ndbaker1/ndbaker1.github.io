<script>
  import ColorSwitcher from './ColorSwitcher.svelte'

  let showThemePicker = false
</script>

<div id="navbar">
  <header class="bar themed">
    <a id="name" href="./"> Nicholas Baker </a>
    <div id="navigation" class="grid grid-cols-4 gap-3">
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="https://github.com/ndbaker1" target="_blank">Github</a>
      <button on:click={() => (showThemePicker = !showThemePicker)}>Themes</button>
      {#if showThemePicker}
        <ColorSwitcher />
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
