<script lang="ts">
  import { onKeys } from '../actions/onKeys.action';
  import { clickOutside } from '../actions/outsideClick.action';
  import { createEventDispatcher } from 'svelte';
  import { blur } from 'svelte/transition';

  export let escapeKeys: string[] = ['Escape'];

  const dispatch = createEventDispatcher();

  const closeOnOutsideClick = clickOutside(() => dispatch('close-window'));
  const cloneOnEscape = onKeys(escapeKeys, () => dispatch('close-window'));
</script>

<span
  transition:blur
  use:closeOnOutsideClick
  use:cloneOnEscape
  class="themed window p-1 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
>
  <slot />
  {#if escapeKeys.length > 0}
    <p class="text-sm">
      Press {escapeKeys.join(', ')} or Click Outside to Close
    </p>
  {/if}
</span>

<style>
  .window {
    background-color: var(--bg-color);
    border: 0 solid var(--text-color);
    border-radius: 1rem;
    max-height: 80vh;
    overflow: auto;
    z-index: 99;
  }
</style>
