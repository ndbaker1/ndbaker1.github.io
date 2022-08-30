<script lang="ts">
  import { themes } from '../services/theme.service';
</script>

<div id="color-switcher">
  <h2>
    Select a Theme
    <hr />
  </h2>
  <div class="grid grid-cols-3">
    {#each themes as theme}
      <button class="themed p-2" on:click={() => theme.setCurrent()}>
        {theme.name}
      </button>
    {/each}
  </div>
</div>
