<script lang="ts">
  import { onMount } from 'svelte'
  import { Github } from '../services/globals.service'

  let projects = []
  onMount(async () => {
    projects = await Github.getUserRepos()
  })
</script>

<div id="projects" class="grid grid-cols-2 gap-10">
  {#each projects as project}
    <div class="project-card shadow-xl">
      {project.full_name}
    </div>
  {/each}
</div>

<style>
  .project-card {
    background-size: cover;
    color: var(--text-color);
    background-color: var(--button-bg-color);
  }

  @media screen and (max-width: 900px) {
    /* one project-card per row if the screen is too small */
    .project-card {
      width: 100%;
    }
  }
</style>
