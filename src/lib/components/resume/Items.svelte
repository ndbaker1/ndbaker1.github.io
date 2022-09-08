<script lang="ts">
  export let type: 'work' | 'competition';
  export let event: string;
  export let position: string;
  export let company: string;
  export let date: string;
  export let location: string;
  export let dateAndPlace: string;
  export let items: string[];
</script>

<div>
  {#if type === 'work'}
    <p><b>{position}</b></p>
    <p><i>{company}</i></p>
    <p><i>{date} | {location}</i></p>
  {/if}
  {#if type === 'competition'}
    <p><b>{event}</b></p>
    <p><i>{dateAndPlace}</i></p>
  {/if}

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
