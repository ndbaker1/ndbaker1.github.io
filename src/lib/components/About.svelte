<script lang="ts">
  import portfolio from '$lib/ndbaker1/portfolio.yml';

  const interests: string[] = portfolio.interests;
</script>

<section id="about" class="themed flex align-center justify-center">
  <div class="flex flex-col m-auto pt-10">
    <div class="grid gap-2">
      <div>
        <h2 class="skill-header text-3xl my-2">Interests</h2>
        <div class="align-left">
          {#each interests as interest}
            <p>
              {interest}
            </p>
          {/each}
        </div>
      </div>
      <div class="flex flex-row justify-center space-x-6 mt-5">
        <a
          href="https://github.com/ndbaker1"
          class="about-links button themed rounded-full shadow-md hover:shadow-lg p-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
        <a
          href="/resume"
          class="about-links button themed rounded-full shadow-md hover:shadow-lg p-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  svg {
    fill: var(--text-color);
  }

  .skill-header {
    text-align: center;
    color: var(--text-color-hover);
    font-size: x-large;
  }

  .about-links {
    border-style: dashed;
    text-transform: uppercase;
  }
</style>
