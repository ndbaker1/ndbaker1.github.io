<script lang="ts">
  import { themes } from '../services/theme.service'
</script>

<div
  id="color-switcher"
  class="fixed top-1/2 left-1/2 w-1/2 h-1/2 transition-all"
  style="transform: translate(-50%, -50%);"
>
  {#each themes as theme}
    <button on:click={() => theme.setCurrent()}>
      {theme.name}
    </button>
  {/each}
</div>

<style>
  #color-switcher {
    display: block;
    border: 5px solid var(--text-color);
    background-color: var(--bg-color);
  }
</style>
