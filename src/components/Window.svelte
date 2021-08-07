<script lang="ts">
  import { onEscape } from '../actions/onEscape.action'
  import { clickOutside } from '../actions/outsideClick.action'
  import { createEventDispatcher } from 'svelte'
  import { blur } from 'svelte/transition'

  const dispatch = createEventDispatcher()

  const closeOnOutsideClick = clickOutside(() => dispatch('close-window'))
  const cloneOnEscape = onEscape(() => dispatch('close-window'))
</script>

<span
  transition:blur
  use:closeOnOutsideClick
  use:cloneOnEscape
  class="themed window p-1 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
>
  <slot />
  <p class="text-sm">Press Escape or Click Outside to Close</p>
</span>

<style>
  .window {
    background-color: var(--bg-color);
    border: 3px solid var(--text-color);
    max-height: 80vh;
    overflow: auto;
  }
</style>
