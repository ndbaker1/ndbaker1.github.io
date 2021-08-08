<script lang="ts">
  import { Links, Skills, Interests } from '../mydata'
</script>

<section id="about" class="themed h-screen flex align-center justify-center">
  <div class="flex flex-col justify-center">
    <div class="grid gap-5">
      <div>
        <h2 class="text-3xl my-4">About Me</h2>
        <p class="text-xl">
          Pursuing a Computer Science Degree at the <b>University of Texas at Dallas</b>
        </p>
      </div>
      <div>
        <h2 class="text-3xl my-4">Skills / Interests</h2>
        <div class="grid gap-2 text-left">
          <div class="grid grid-cols-2">
            <h2 class="skill-header">Languages</h2>
            <div>
              {Skills.Languages.join(', ')}
            </div>
          </div>
          <div class="grid grid-cols-2">
            <h2 class="skill-header">Frameworks</h2>
            <div>
              {[...Skills.FrontendFrameworks, ...Skills.BackendFrameworks].join(', ')}
            </div>
          </div>
          <div class="grid grid-cols-2">
            <h2 class="skill-header">Tools & Providers</h2>
            <div>
              {Skills.ToolsAndProviders.join(', ')}
            </div>
          </div>
          <div class="grid grid-cols-2">
            <h2 class="skill-header">Areas of Interest</h2>
            <div>
              {Interests.join(', ')}
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-5">
        <a href={Links.github} target="_blank" rel="noopener noreferrer">
          <button class="button themed w-full rounded-full py-3 px-6 shadow-md hover:shadow-lg">
            GITHUB
          </button>
        </a>
        <a href={Links.resume} target="_blank" rel="noopener noreferrer">
          <button class="button themed w-full rounded-full py-3 px-6 shadow-md hover:shadow-lg">
            RESUME
          </button>
        </a>
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
    max-width: 250px;
  }
</style>
