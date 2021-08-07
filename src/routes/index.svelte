<script lang="ts">
  import { onMount } from 'svelte'

  import { Theme } from '../services/theme.service'
  import { KeyMaps } from '../services/keymap.service'

  import Navbar from '../components/Navbar.svelte'
  import About from '../components/About.svelte'
  import Projects from '../components/Projects.svelte'
  import CommandBar from '../components/CommandBar.svelte'
  import NavigationWindow from '../components/NavigationWindow.svelte'

  onMount(() => {
    Theme.refresh()
    KeyMaps.init()
  })
</script>

<CommandBar />
<Navbar />
<div class="max-w-screen-lg m-auto px-10">
  <About />
  <Projects />
</div>
<div class="page-loader" />

<NavigationWindow />

<style>
  .page-loader {
    z-index: 999;
    background-color: black;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    animation: load-in 0.5s ease 0.5s forwards;
  }
  @keyframes load-in {
    0% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
  }
</style>
