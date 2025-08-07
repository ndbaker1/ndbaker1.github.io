<script lang="ts">
  import { fly } from 'svelte/transition';
  let scrollY: number = $state();
</script>

<svelte:window bind:scrollY />

<div id="navbar" class="themed">
  {#if scrollY < 20}
    <header transition:fly|global class="bar themed fixed grid text-left p-4">
      <a id="name" href="./" class="text-xl"> Nick Baker </a>
      <small><kbd>Escape</kbd> to navigate</small>
    </header>
  {/if}
</div>

<style>
  * {
    font-family: 'Fira Code', sans-serif;
  }

  .bar {
    z-index: 99;
  }
  .bar a {
    transition: 300ms;
  }
  .bar a:hover {
    color: var(--text-color-hover);
  }

  small {
    font-size: 0.7rem;
  }

  kbd {
    box-shadow: 0 1px 1px #0009;
    background-color: var(--button-bg-color-hover);
    border-radius: 4px;
    padding: 2px 4px;
  }
</style>
