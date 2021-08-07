<script lang="ts">
  import { KeyMaps } from '../services/keymap.service'
  import { onMount } from 'svelte'
  import { focusOnVisible } from '../actions/focusOnVisible.action'
  import { CommandService } from '../services/command.service'
  import { Commands } from '../services/commands/commandList'

  let currentText = ''
  let showBar = false

  const commandService = new CommandService()

  onMount(() => {
    KeyMaps.register(':', () => {
      if (!showBar) {
        showBar = true
        currentText = ''
      }
    })
    KeyMaps.register('Escape', () => {
      showBar = false
    })

    commandService.registerCommand('theme', Commands.manageTheme)
    commandService.registerCommand('t', Commands.manageTheme)
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
        showBar = false
      } else if (event.key === 'Backspace' && currentText.length == 1) showBar = false
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
