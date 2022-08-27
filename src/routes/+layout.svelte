<script lang="ts">
  import '../app.css'

  import { onMount } from 'svelte'
  import { Theme } from '$lib/services/theme.service'
  import { KeyMaps } from '$lib/services/keymap.service'

  onMount(() => {
    Theme.refresh()
    KeyMaps.init()
  })
</script>

<slot />
