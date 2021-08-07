<script lang="ts">
  import { Links } from '../services/globals.service'
</script>

<section id="about" class="themed h-screen flex align-center justify-center">
  <div class="flex flex-col justify-center">
    <div class="grid gap-5">
      <div>
        <h2 class="text-4xl my-4">About Me</h2>
        <p class="text-xl">
          <i>Pursuing a Computer Science Degree at the University of Texas at Dallas</i>
        </p>
      </div>
      <div>
        <h2 class="text-4xl my-4">Skills / Interests</h2>
        <p class="text-xl">
          Full-Stack<br />
          Machine Learning<br />
          Cloud Computing/Architecture<br />
        </p>
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
</style>
