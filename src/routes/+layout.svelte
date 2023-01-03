<script lang="ts">
  import '../app.css';

  import { onMount } from 'svelte';
  import { ThemeService } from 'addons/services/theme';

  onMount(() => {
    ThemeService.refresh();
  });
</script>

<slot />
