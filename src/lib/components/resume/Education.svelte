<script lang="ts">
  interface Props {
    title: string;
    location: string;
    date: string;
  }

  let { title, location, date }: Props = $props();
</script>

<div class="education small">
  <h3 class="title"><b>{title}</b></h3>
  <p class="smaller">{location}</p>
  <p class="smaller">{date}</p>
</div>

<style>
  @reference "tailwindcss";

  div.education {
    margin-bottom: 0.5rem;
  }

  .title {
    opacity: 0.85;
  }
</style>
