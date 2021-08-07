<script lang="ts">
  import { themes } from '../services/theme.service'
</script>

<div id="color-switcher" class="grid grid-cols-2">
  {#each themes as theme}
    <button class="p-2" on:click={() => theme.setCurrent()}>
      {theme.name}
    </button>
  {/each}
</div>

<style>
  #color-switcher button:hover {
    color: var(--text-color-hover);
    transition: color 300ms;
  }
</style>
