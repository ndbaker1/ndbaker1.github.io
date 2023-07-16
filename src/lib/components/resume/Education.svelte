<script lang="ts">
  export let title: string;
  export let location: string;
  export let date: string;
</script>

<div class="edu small">
  <h2>{title}</h2>
  <p class="smaller">{location}</p>
  <p class="smaller">{date}</p>
</div>

<style>
  div.edu {
    margin-bottom: 1rem;
  }
</style>
