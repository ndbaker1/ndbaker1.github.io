<script lang="ts">
  import { getSections } from '../services/section-navigation.service'
  import { showNavigatorStore } from '../services/globals.service'

  import Window from './Window.svelte'

  const jumpToSection = (section: HTMLElement) => {
    section.scrollIntoView({ behavior: 'smooth' })
    showNavigatorStore.set(false)
  }

  let showNavigator: boolean = false
  showNavigatorStore.subscribe((show) => (showNavigator = show))
</script>

{#if showNavigator}
  <div id="navigator" class="themed text-2xl">
    <Window on:close-window={() => showNavigatorStore.set(false)}>
      <div class="grid text-left">
        {#each getSections() as section, i}
          <button class="themed" on:click={() => jumpToSection(section)}>
            {i + 1} - {section.id}
          </button>
        {/each}
      </div>
    </Window>
  </div>
{/if}
