<script lang="ts">
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'

  import { KeyMaps } from '../services/keymap.service'
  import { focusOnVisible } from '../actions/focusOnVisible.action'
  import { CommandService } from '../services/command.service'
  import { Commands } from '../services/commands/commandList'
  import { clickOutside } from '../actions/outsideClick.action'
  import { Links } from '../services/globals.service'

  let currentText = ''
  let showBar = false

  const commandService = new CommandService()

  const barHandler = {
    open: () => {
      if (!showBar) {
        showBar = true
        currentText = ''
      }
    },
    close: () => (showBar = false),
  }

  const outsideClickClose = clickOutside(barHandler.close)

  const keyHandlers = {
    keyup: (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        commandService.execute(currentText)
        barHandler.close()
      }
    },
    keydown: (event: KeyboardEvent) => {
      if (event.key === 'Backspace' && currentText.length == 0) barHandler.close()
    },
  }

  onMount(() => {
    KeyMaps.register([':', '/'], barHandler.open)
    KeyMaps.register(['Escape'], barHandler.close)

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
    transition:slide
    use:focusOnVisible
    use:outsideClickClose
    bind:value={currentText}
    on:keydown={keyHandlers.keydown}
    on:keyup={keyHandlers.keyup}
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
