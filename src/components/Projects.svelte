<script lang="ts">
  import { onMount } from 'svelte'
  import { Github } from '../services/globals.service'

  let projects = []
  onMount(async () => {
    projects = await Github.getUserRepos()
    projects = projects.filter((p) => p.description)
  })
</script>

<section id="projects" class="themed">
  <p class="text-4xl mb-5">Projects</p>
  <div id="project-gallery" class="grid grid-cols-2 gap-10">
    {#each projects as project}
      <a href={project.html_url} target="_blank" rel="noopener noreferrer">
        <button class="button themed project-card w-full shadow-xl p-5 rounded-lg">
          <h1 class="capitalize">
            {project.name}
          </h1>
          <hr />
          <p>
            {project.description}
          </p>
        </button>
      </a>
    {/each}
  </div>
</section>

<style>
  .project-card {
    background-size: cover;
    color: var(--text-color);
    background-color: var(--button-bg-color);
  }
</style>
