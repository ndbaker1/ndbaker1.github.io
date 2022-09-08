<script lang="ts">
  import '../app.css';

  import { onMount } from 'svelte';
  import { Theme } from 'addons/services/theme';

  onMount(() => {
    Theme.refresh();
  });
</script>

<slot />
