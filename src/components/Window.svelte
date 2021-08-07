<script lang="ts">
  import { onEscape } from '../actions/onEscape.action'
  import { clickOutside } from '../actions/outsideClick.action'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  const closeOnOutsideClick = clickOutside(() => dispatch('close-window'))
  const cloneOnEscape = onEscape(() => dispatch('close-window'))
</script>

<span
  use:closeOnOutsideClick
  use:cloneOnEscape
  class="fixed top-1/2 left-1/2"
  style="transform: translate(-50%, -50%);"
>
  <slot />
</span>
