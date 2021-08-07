<script lang="ts">
  import { KeyMaps } from '../services/keymap.service'
  import { onMount } from 'svelte'
  import { focusOnVisible } from '../actions/focusOnVisible.action'
  import { CommandService } from '../services/command.service'
  import { Commands } from '../services/commands/commandList'

  let currentText = ''
  let showBar = false

  const commandService = new CommandService()

  const openBar = () => {
    if (!showBar) {
      showBar = true
      currentText = ''
    }
  }
  const closeBar = () => (showBar = false)

  onMount(() => {
    KeyMaps.register(':', openBar)
    KeyMaps.register('Escape', closeBar)

    commandService.register(['theme', 't'], Commands.manageTheme)
    commandService.register(['go'], Commands.navigate)
  })
</script>

{#if showBar}
  <input
    id="command-bar"
    class="fixed left-0 top-0 w-full transition-all text-xl"
    autocomplete="off"
    use:focusOnVisible
    bind:value={currentText}
    on:keydown={(event) => {
      if (event.key === 'Enter') {
        commandService.execute(currentText)
        closeBar()
      }
    }}
    on:keyup={(event) => {
      if (event.key === 'Backspace' && currentText.length == 0) closeBar()
    }}
  />
{/if}

<style>
  #command-bar {
    z-index: 99;
    border-bottom: 2px solid var(--button-bg-color);
    color: var(--text-color);
    background-color: var(--bg-color);
    outline: none;
  }
</style>
