<script lang="ts">
  import { Links, Skills, Interests } from '../mydata'

  const SkillsGroups = [
    {
      title: 'Languages',
      chips: Skills.Languages,
    },
    {
      title: 'Frameworks',
      chips: [...Skills.FrontendFrameworks, ...Skills.BackendFrameworks],
    },
    {
      title: 'Tools & Providers',
      chips: Skills.ToolsAndProviders,
    },
    {
      title: 'Areas of Interest',
      chips: Interests,
    },
  ]

  const LinkGroup = [
    { title: 'GITHUB', url: Links.github },
    { title: 'RESUME', url: Links.resume },
  ]
</script>

<section id="about" class="themed min-h-screen flex align-center justify-center">
  <div class="flex flex-col m-auto pt-10">
    <div class="grid gap-2">
      <div>
        <h2 class="text-3xl my-2">About Me</h2>
        <p class="md:text-xl px-10 text-justify">
          Pursuing a Computer Science Degree at the <b>University of Texas at Dallas</b>
        </p>
      </div>
      <div>
        <h2 class="text-3xl my-2">Skills / Interests</h2>
        <div class="grid md:grid-cols-2 md:gap-2 justify-center md:justify-left md:text-left">
          {#each SkillsGroups as group}
            <h2 class="skill-header">{group.title}</h2>
            <div>
              {group.chips.join(', ')}
            </div>
          {/each}
        </div>
      </div>
      <div class="flex flex-row justify-center space-x-6 mt-5">
        {#each LinkGroup as link}
          <a href={link.url} class="about-links" target="_blank" rel="noopener noreferrer">
            <button class="button themed w-full rounded-full py-3 px-6 shadow-md hover:shadow-lg">
              {link.title}
            </button>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .skill-header {
    text-align: center;
    color: var(--text-color-hover);
    font-size: larger;
    font-weight: 600;
  }
  .skill-header + * {
    max-width: 300px;
  }
  .about-links {
    min-width: 150px;
  }
</style>
