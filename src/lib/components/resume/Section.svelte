<script lang="ts">
  interface Props {
    title: string;
    children?: import('svelte').Snippet;
  }

  let { title, children }: Props = $props();
</script>

<div>
  <h3 class="section-title">{title}</h3>
  <hr />
  <div class="content">
    {@render children?.()}
  </div>
</div>

<style>
  @reference "tailwindcss";

  .section-title {
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 600;
  }

  div.content {
    margin: 1rem 0;
  }
</style>
