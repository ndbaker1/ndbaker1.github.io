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
  <p class="small">
    <b>{company}</b>
  </p>
  <p class="small">
    <i>{position}</i>
  </p>
  <div class="small flex justify-between items-baseline">
    <p>{date}</p>
    <p>{location}</p>
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
  ul {
    list-style: circle;
    padding-left: 2rem;
  }

  section {
    margin-bottom: 0.5rem;
  }
</style>
