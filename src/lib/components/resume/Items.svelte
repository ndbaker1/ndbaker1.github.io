<script lang="ts">
  export let position: string;
  export let company: string;
  export let date: string;
  export let location: string;
  export let items: string[];
</script>

<section>
  <p>
    {company} - {position}
  </p>
  <div class="small" style="display: flex; justify-content: space-between;">
    <p>{date}</p>
    <p>{location}</p>
  </div>
  <ul>
    {#each items as note}
      <li><p class="small">{note}</p></li>
    {/each}
  </ul>
</section>

<style>
  .small {
    font-size: var(--small-text);
  }

  ul {
    list-style: circle;
    padding-left: 2rem;
  }

  div {
    display: flex;
    align-items: baseline;
  }
  section {
    margin-bottom: 0.5rem;
  }
</style>
