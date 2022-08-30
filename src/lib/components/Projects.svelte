<script lang="ts">
  import { onMount } from 'svelte';
  import { Github } from '../services/globals.service';

  let projects = {
    // deployed projects are those that have a site to visit
    deployed: [],
    static: [],
  };

  onMount(async () => {
    let projectData = await Github.getUserRepos();
    projectData = projectData.filter(
      (p) => p.description && p.description.length > 30 && !p.archived
    );

    projects.deployed = projectData.filter((p) => !!p.homepage);
    projects.static = projectData.filter((p) => !p.homepage);
  });
</script>

<section id="projects" class="themed">
  <h1 class="text-4xl mb-5">Projects</h1>

  <p class="text-2xl">Demos</p>
  <hr class="w-1/4 m-auto mb-5" />

  <div id="project-gallery" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {#each projects.deployed as project}
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

  <p class="text-2xl">Other</p>
  <hr class="w-1/4 m-auto mb-5" />

  <div id="project-gallery" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {#each projects.static as project}
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
