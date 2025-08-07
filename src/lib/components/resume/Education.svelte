<script lang="ts">
  interface Props {
    title: string;
    location: string;
    date: string;
  }

  let { title, location, date }: Props = $props();
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
