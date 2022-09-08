<script lang="ts">
  export let title: string;
</script>

<div>
  <h3 class="section-title">{title}</h3>
  <hr />
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .section-title {
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 600;
  }

  div.content {
    margin: 1rem 0;
  }
</style>
