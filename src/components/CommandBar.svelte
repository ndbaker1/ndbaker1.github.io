<script lang="ts">
  import { KeyMaps } from '../services/keymap.service'
  import { onMount } from 'svelte'
  import { focusOnVisible } from '../actions/focusOnVisible.action'
  import { showThemePickerStore } from '../services/storage.service'

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
  })

  type Command = 'theme' | 't'

  let showBar = false
  let currentText: string

  function execute() {
    showBar = false
    switch (currentText.substring(1) as Command) {
      case 't':
      case 'theme':
        showThemePickerStore.set(true)
    }
  }
</script>

{#if showBar}
  <input
    id="command-bar"
    class="fixed left-0 top-0 w-full transition-all text-xl"
    autocomplete="off"
    use:focusOnVisible
    bind:value={currentText}
    on:keydown={(event) => {
      if (event.key === 'Enter') execute()
      else if (event.key === 'Backspace' && currentText.length == 1) showBar = false
    }}
  />
{/if}

<style>
  #command-bar {
    z-index: 99;
    border-bottom: 2px solid var(--button-bg-color);
    text-align: left;
    color: var(--text-color);
    background-color: var(--bg-color);
    outline: none;
  }
</style>
