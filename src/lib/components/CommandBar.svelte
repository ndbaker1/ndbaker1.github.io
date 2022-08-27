<script lang="ts">
  import Window from './Window.svelte'
  import { focusOnVisible } from '$lib/actions/focusOnVisible.action'
  import { CommandService } from '$lib/services/command.service'
  import { Commands } from '$lib/services/commands/commandList'
  import { Links } from '$lib/mydata'

  import { slide } from 'svelte/transition'
  import { CommandBarService } from '$lib/services/commandbar.service'

  import { onMount } from 'svelte'

  const commandService = new CommandService()
  const commandBarService = new CommandBarService([':'], commandService, {
    get: () => value,
    set: (s) => (value = s),
  })

  // help
  commandService.register(/^:(help|h)$/i, () => showHelp.set(true))
  // variables
  commandService.register(/^:set$/i, Commands.setVariable)
  commandService.register(/^:log$/i, Commands.logVariables)
  commandService.register(/^:clear$/i, Commands.logVariables)
  // utilities
  commandService.register(/^:wasm$/i, Commands.wasm)
  // navigation/ui
  commandService.register(/^:(theme|t)$/i, Commands.manageTheme)
  commandService.register(/^:(goto|g)$/i, Commands.openNavigator)
  commandService.register(/^:\d$/i, Commands.navigate)
  // links
  commandService.register(/^:github$/i, () => window.open(Links.github))
  commandService.register(/^:resume$/i, () => window.open(Links.resume))
  commandService.register(/^:anime$/i, () => window.open(Links.animeList))

  let value = ''
  const showBar = commandBarService.bar.show
  const showHelp = commandBarService.showHelp

  onMount(() => {
    commandBarService.init()
  })
</script>

{#if $showHelp}
  <Window escapeKeys={['Escape', 'Enter']} on:close-window={() => showHelp.set(false)}>
    <div class="themed p-2 ">
      <h1 class="text-2xl">Commands</h1>
      <hr />
      <div class="text-left">
        {#each commandBarService.commandList as command}
          <p>{command.value}</p>
          {#each command.info as info}
            <p>-- {info}</p>
          {/each}
        {/each}
        <br />
        <p>. . . and secret commands</p>
      </div>
    </div>
  </Window>
{/if}
{#if $showBar}
  <input
    id="command-bar"
    class="fixed left-0 top-0 w-full transition-all text-md"
    autocomplete="off"
    transition:slide
    use:focusOnVisible
    use:commandBarService.outsideClickClose
    on:keyup={commandBarService.keyHandlers.keyup}
    bind:value
  />
{/if}

<style>
  #command-bar {
    font-family: 'Consolas';
    z-index: 99;
    border-bottom: 2px solid var(--button-bg-color);
    color: var(--text-color);
    background-color: transparent;
    outline: none;
  }
</style>
