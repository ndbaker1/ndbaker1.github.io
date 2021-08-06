<script lang="ts">
  import { onMount } from 'svelte'
  import { Storage } from '../services/storage.service'

  type ColorVariables = 'bg-color-primary' | 'text-color-primary' | 'text-color-primary-hover'

  class Theme {
    constructor(public name: string, public colors: Record<ColorVariables, string>) {}
    setActive() {
      Object.entries(this.colors).forEach(([name, value]) => {
        document.documentElement.style.setProperty('--' + name, value)
      })
      Storage.set('currentTheme', this.name)
    }
  }

  const themes = [
    new Theme('basic-light', {
      'bg-color-primary': '#EDF2F4',
      'text-color-primary': '#8D99AE',
      'text-color-primary-hover': '#2B2D42',
      // EF233C
      // D90429
    }),
    new Theme('basic-dark', {
      'bg-color-primary': '#2B2D42',
      'text-color-primary': '#8D99AE',
      'text-color-primary-hover': '#EDF2F4',
    }),
  ]

  onMount(() =>
    (themes.find((theme) => theme.name == Storage.get('currentTheme')) ?? themes[0]).setActive()
  )
</script>

<div id="color-switcher">
  {#each themes as theme}
    <div on:click={() => theme.setActive()}>
      {theme.name}
    </div>
  {/each}
</div>

<style>
</style>
