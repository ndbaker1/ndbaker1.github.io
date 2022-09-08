<script lang="ts">
  export let title: string;
  export let location: string;
  export let date: string;
</script>

<div class="edu">
  <h2>{title}</h2>
  <p>{location}</p>
  <p>{date}</p>
</div>

<style>
  div.edu {
    margin-bottom: 1rem;
  }

  div.edu p {
    font-size: var(--small-text);
  }
</style>
