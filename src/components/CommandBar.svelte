<script lang="ts">
  import { KeyMaps } from '../services/keymap.service'
  import { onMount } from 'svelte'
  import { focusOnVisible } from '../actions/focusOnVisible.action'
  import { CommandService } from '../services/command.service'
  import { Commands } from '../services/commands/commandList'
  import { clickOutside } from '../actions/outsideClick.action'
  import { Links } from '../services/globals.service'

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

  const outsideClickClose = clickOutside(closeBar)

  onMount(() => {
    KeyMaps.register([':', '/'], openBar)
    KeyMaps.register(['Escape'], closeBar)

    commandService.register(/^:(theme|t)$/i, Commands.manageTheme)
    commandService.register(/^:go$/i, Commands.navigate)
    commandService.register(/^:(scroll|s)$/i, Commands.scroll)

    commandService.register(/^:github$/i, () => window.open(Links.github))
    commandService.register(/^:resume$/i, () => window.open(Links.resume))
  })
</script>

{#if showBar}
  <input
    id="command-bar"
    class="fixed left-0 top-0 w-full transition-all text-xl"
    autocomplete="off"
    use:focusOnVisible
    use:outsideClickClose
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
