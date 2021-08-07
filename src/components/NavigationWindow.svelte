<script lang="ts">
  import { getSections } from '../services/section-navigation.service'
  import { showNavigatorStore } from '../services/globals.service'

  import Window from './Window.svelte'
  import { onMount } from 'svelte'

  const makeSelection = (event: KeyboardEvent) => {
    getSections()[+event.key - 1].scrollIntoView({ behavior: 'smooth' })
    showNavigatorStore.set(false)
  }

  let showNavigator: boolean = false

  onMount(() => {
    showNavigatorStore.subscribe((show) => {
      showNavigator = show
      if (showNavigator) addEventListener('keypress', makeSelection)
      else removeEventListener('keypress', makeSelection)
    })
  })
</script>

{#if showNavigator}
  <div id="navigator" class="themed text-2xl">
    <Window on:close-window={() => showNavigatorStore.set(false)}>
      <div class="grid">
        {#each getSections() as section, i}
          <p>
            {i + 1} - {section.id}
          </p>
        {/each}
      </div>
    </Window>
  </div>
{/if}
