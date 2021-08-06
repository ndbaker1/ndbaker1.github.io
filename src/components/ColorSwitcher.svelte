<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  import { clickOutside } from '../actions/outsideClick.action'
  import { themes } from '../services/theme.service'

  const dispatch = createEventDispatcher()
  const closeOnOutsideClick = clickOutside(() => dispatch('close-window'))
</script>

<div
  use:closeOnOutsideClick
  id="color-switcher"
  class="fixed grid grid-cols-2 top-1/2 left-1/2 w-1/4 transition-all"
  style="transform: translate(-50%, -50%);"
>
  {#each themes as theme}
    <button class="p-2" on:click={() => theme.setCurrent()}>
      {theme.name}
    </button>
  {/each}
</div>

<style>
  #color-switcher {
    border: 3px solid var(--text-color);
    background-color: var(--bg-color);
  }
</style>
