<script lang="ts">
  export let title: string
</script>

<div>
  <h3 class="section-title">{title}</h3>
  <hr />
  <slot />
</div>

<style>
  .section-title {
    text-transform: uppercase;
  }
</style>
