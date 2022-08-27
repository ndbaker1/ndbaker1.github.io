<script lang="ts">
  export let type: string
  export let event: string
  export let position: string
  export let company: string
  export let date: string
  export let location: string
  export let dateAndPlace: string
  export let items: string[]
</script>

{#if type === 'work'}
  <div class="summary">
    <h4>{position}</h4>
    <p>{company} <br /> {date} | {location}</p>
    <ul>
      {#each items as note}
        <li><p>{note}</p></li>
      {/each}
    </ul>
  </div>
{/if}
{#if type === 'competition'}
  <div class="summary">
    <h4>{event}</h4>
    <p>{dateAndPlace}</p>
    <ul>
      {#each items as note}
        <li><p>{note}</p></li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  ul {
    margin-top: 0.5rem;
    padding-left: 1.3rem;
  }
</style>
