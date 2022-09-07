<script lang="ts">
  import { clickOutside } from '../actions/outsideClick.action';
  import { createEventDispatcher } from 'svelte';
  import { blur } from 'svelte/transition';

  export let position: { left?: string; top?: string } = {};

  const dispatch = createEventDispatcher();

  const closeOnOutsideClick = clickOutside(() => dispatch('close-window'));
</script>

<span
  transition:blur
  use:closeOnOutsideClick
  class="themed window fixed top-1/2 left-1/2 transform -translate-x-1/2"
  style="left: {position?.left}; top: {position?.top};"
>
  <slot />
</span>

<style>
  .window {
    background-color: var(--bg-color);
    border: 0 solid var(--text-color);
    border-radius: 0.6rem;
    max-height: 80vh;
    overflow: auto;
    z-index: 99;
  }
</style>
