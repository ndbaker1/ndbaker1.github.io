<script lang="ts">
  import { fly } from 'svelte/transition';
  let scrollY: number;
</script>

<svelte:window bind:scrollY />

<div id="navbar" class="themed">
  {#if scrollY < 20}
    <header transition:fly class="bar themed fixed grid text-left p-4">
      <a id="name" href="./" class="text-xl"> Nick Baker </a>
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
</style>
