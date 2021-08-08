<script lang="ts" context="module">
  import { writable } from 'svelte/store'

  import { KeyMaps } from '../services/keymap.service'
  import { clickOutside } from '../actions/outsideClick.action'

  export class CommandBarService {
    constructor(
      private starters: string[],
      private commandRunner: CommandRunner,
      private textValue: { get: () => string; set: (s: string) => void }
    ) {}

    showHelp = writable(false)

    commandList = [
      { value: 'theme<t> [ name ]', desc: 'change to another theme by menu, or by $name' },
      { value: 'goto<g>', desc: 'open section navigation menu' },
      { value: '{ SECTION_NUMBER }', desc: 'scroll directly to a section by number' },
      { value: 'github', desc: 'open github in a new tab' },
      { value: 'resume', desc: 'open resume in a new tab' },
    ]

    bar = {
      show: writable(false),
      open: (): void =>
        this.bar.show.update((isShowing) => {
          if (!isShowing) this.textValue.set('')
          return true
        }),
      close: (): void => this.bar.show.set(false),
    }

    outsideClickClose = clickOutside(this.bar.close)

    keyHandlers = {
      keyup: (event: KeyboardEvent): void => {
        if (event.key === 'Enter') {
          this.commandRunner.execute(this.textValue.get())
          this.bar.close()
        } else if (!this.starters.some((c) => this.textValue.get().startsWith(c))) {
          this.bar.close()
        }
      },
    }

    init(): void {
      KeyMaps.register(this.starters, this.bar.open)
      KeyMaps.register(['Escape'], this.bar.close)
    }
  }
</script>

<script lang="ts">
  import { slide } from 'svelte/transition'

  import Window from './Window.svelte'
  import { focusOnVisible } from '../actions/focusOnVisible.action'
  import { CommandRunner } from '../services/command.service'
  import { Commands } from '../services/commands/commandList'
  import { Links } from '../mydata'
  import { onMount } from 'svelte'

  const commandRunner = new CommandRunner()
  const commandBarService = new CommandBarService([':'], commandRunner, {
    get: () => value,
    set: (s) => (value = s),
  })

  commandRunner.register(/^:(help|h)$/i, () => showHelp.set(true))

  commandRunner.register(/^:set$/i, Commands.setVariable)

  commandRunner.register(/^:(theme|t)$/i, Commands.manageTheme)
  commandRunner.register(/^:(goto|g)$/i, Commands.openNavigator)
  commandRunner.register(/^:\d$/i, Commands.navigate)

  commandRunner.register(/^:github$/i, () => window.open(Links.github))
  commandRunner.register(/^:resume$/i, () => window.open(Links.resume))
  commandRunner.register(/^:anime$/i, () => window.open(Links.animeList))

  let value
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
      <div class="text-left text-xl">
        {#each commandBarService.commandList as command}
          <p>:{command.value} <br /> -- {command.desc}</p>
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
