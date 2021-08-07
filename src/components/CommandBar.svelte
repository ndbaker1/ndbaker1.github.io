<script lang="ts">
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'

  import { KeyMaps } from '../services/keymap.service'
  import { focusOnVisible } from '../actions/focusOnVisible.action'
  import { CommandService } from '../services/command.service'
  import { Commands } from '../services/commands/commandList'
  import { clickOutside } from '../actions/outsideClick.action'
  import { Links } from '../services/globals.service'
  import Window from './Window.svelte'

  let showHelp = false
  const commandStarters = [':']
  const commandList = [
    { value: 'theme [ name ]', desc: 'change to another theme' },
    { value: 'github', desc: 'open github in a new tab' },
    { value: 'resume', desc: 'open resume in a new tab' },
  ]
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
      } else if (!commandStarters.some((c) => currentText.startsWith(c))) {
        barHandler.close()
      }
    },
  }

  onMount(() => {
    KeyMaps.register(commandStarters, barHandler.open)
    KeyMaps.register(['Escape'], barHandler.close)

    /**
     * Declaration of Commands
     */
    commandService.register(/^:(help|h|\?)$/i, () => (showHelp = true))

    commandService.register(/^:(theme|t)$/i, Commands.manageTheme)
    commandService.register(/^:goto$/i, Commands.openNavigator)
    commandService.register(/^:\d$/i, Commands.navigate, (line) => [line, line.substr(1)])

    commandService.register(/^:github$/i, () => window.open(Links.github))
    commandService.register(/^:resume$/i, () => window.open(Links.resume))
  })
</script>

{#if showHelp}
  <Window on:close-window={() => (showHelp = false)}>
    <div class="themed p-2 text-left text-xl">
      {#each commandList as command}
        <p>:{command.value} <br /> -- {command.desc}</p>
      {/each}
      <br />
      <p>. . . and secret commands</p>
    </div>
  </Window>
{/if}
{#if showBar}
  <input
    id="command-bar"
    class="fixed left-0 top-0 w-full transition-all text-xl"
    autocomplete="off"
    transition:slide
    use:focusOnVisible
    use:outsideClickClose
    bind:value={currentText}
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
