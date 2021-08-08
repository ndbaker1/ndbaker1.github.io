<script lang="ts">
  import { themes } from '../services/theme.service'
</script>

<div id="color-switcher" class="grid grid-cols-3">
  {#each themes as theme}
    <button class="themed p-2" on:click={() => theme.setCurrent()}>
      {theme.name}
    </button>
  {/each}
</div>
