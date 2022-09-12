<script lang="ts">
  export let position: string;
  export let company: string;
  export let date: string;
  export let location: string;
  export let items: string[];
</script>

<div>
  <p>{position}</p>
  <p>{company}</p>
  <p>{date} | {location}</p>
  <ul>
    {#each items as note}
      <li><p>{note}</p></li>
    {/each}
  </ul>
</div>

<style>
  ul {
    list-style: circle;
    padding-left: 2rem;
  }

  div > p {
    font-size: 0.9rem;
  }
  ul p {
    font-size: var(--small-text);
  }

  div {
    margin-bottom: 0.5rem;
  }
</style>
