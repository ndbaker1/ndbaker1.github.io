<script lang="ts">
  import { clickOutside } from '../actions/outsideClick.action';
  import { createEventDispatcher } from 'svelte';

  interface Props {
    position?: { left?: string; top?: string };
    children?: import('svelte').Snippet;
  }

  let { position = {}, children }: Props = $props();

  const dispatch = createEventDispatcher();

  const closeOnOutsideClick = clickOutside(() => dispatch('close-window'));
</script>

<span
  use:closeOnOutsideClick
  class="themed window fixed top-1/2 left-1/2 transform -translate-x-1/2"
  style="left: {position?.left}; top: {position?.top};"
>
  {@render children?.()}
</span>

<style>
  @reference "tailwindcss";

  .window {
    background-color: var(--bg-color);
    border: 0 solid var(--text-color);
    border-radius: 0.6rem;
    max-height: 80vh;
    overflow: auto;
    z-index: 99;
  }
</style>
