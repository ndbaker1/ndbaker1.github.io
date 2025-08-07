<script lang="ts">
  import '../app.css';

  import { onMount } from 'svelte';
  import { ThemeService } from 'addons/services/theme';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  onMount(() => {
    ThemeService.refresh();
  });
</script>

{@render children?.()}
