<script lang="ts">
  import { onMount } from 'svelte';

  import { focusOnVisible } from '$lib/actions/focusOnVisible.action';
  import { CommandService } from '$lib/services/command.service';
  import { Commands } from '$lib/services/commands/commandList';
  import { CommandBarService } from '$lib/services/commandbar.service';

  import Window from './Window.svelte';
  import ColorSwitcher from './ColorSwitcher.svelte';

  import { showThemePickerStore } from '$lib/services/globals.service';

  const Links = {
    github: 'https://github.com/ndbaker1',
    animeList: 'https://drive.google.com/file/d/1cmAtaKf69lU6dbBZfXnjsK_MecVnA46K/view',
  };

  const commandService = new CommandService();
  const commandBarService = new CommandBarService(['Escape', ':'], commandService, {
    get: () => value,
    set: (s) => (value = s),
  });

  // variables
  commandService.register(/^:set$/i, Commands.setVariable);
  commandService.register(/^:log$/i, Commands.logVariables);
  commandService.register(/^:clear$/i, Commands.logVariables);
  // utilities
  commandService.register(/^:wasm$/i, Commands.wasm);
  // navigation/ui
  commandService.register(/^:(theme|t)$/i, Commands.manageTheme);
  // links
  commandService.register(/^:github$/i, () => window.open(Links.github));
  commandService.register(/^:anime$/i, () => window.open(Links.animeList));

  let value = '';
  const showBar = commandBarService.bar.show;
  const showHelp = commandBarService.showHelp;

  onMount(() => {
    commandBarService.init();
  });
</script>

<!-- Command Bar -->
{#if $showBar}
  <input
    id="command-bar"
    class="w-full transition-all text-md"
    autocomplete="off"
    use:focusOnVisible
    use:commandBarService.outsideClickClose
    on:keyup={commandBarService.keyHandlers.keyup}
    bind:value
  />
{/if}
<!-- Help and Name Icon -->
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
<!-- Theme Picker -->
{#if $showThemePickerStore}
  <Window on:close-window={() => showThemePickerStore.set(false)}>
    <ColorSwitcher />
  </Window>
{/if}

<style>
  #command-bar {
    font-family: 'Fira Code', monospace;
    z-index: 99;
    border: 2px solid var(--button-bg-color);
    background-color: var(--bg-color);
    color: var(--text-color);
    outline: none;
  }
</style>
