<script lang="ts">
  interface Props {
    position: string;
    company: string;
    date: string;
    location: string;
    items: string[];
  }

  let {
    position,
    company,
    date,
    location,
    items
  }: Props = $props();
</script>

<section>
  <h3 class="flex justify-between items-baseline">
    <p class="small company">{company}</p>
    <p class="smaller">{location}</p>
  </h3>
  <div class="smaller flex justify-between items-baseline position">
    <p>{position}</p>
    <i>{date}</i>
  </div>
  {#if items}
    <ul>
      {#each items as note}
        <li><p class="smaller">{note}</p></li>
      {/each}
    </ul>
  {/if}
</section>

<style>
  section {
    margin-bottom: 0.5rem;
  }

  .company {
    opacity: 0.85;
    font-weight: bold;
  }

  .position {
    opacity: 0.85;
  }
</style>
