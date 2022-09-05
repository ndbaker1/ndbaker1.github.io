<script lang="ts">
  import '../app.css';

  import { onMount } from 'svelte';
  import { Theme } from '$lib/services/theme.service';

  onMount(() => {
    Theme.refresh();
  });
</script>

<slot />
