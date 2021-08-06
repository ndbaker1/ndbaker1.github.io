<script>
  import { onMount } from 'svelte'
  import Navbar from '../components/Navbar.svelte'
  import About from '../components/About.svelte'
  import Projects from '../components/Project.svelte'
  import { Theme } from '../services/theme.service'
  import { KeyMaps } from '../services/keymap.service'

  onMount(() => Theme.refresh())
  onMount(() => KeyMaps.init())
</script>

<Navbar />
<div class="px-40">
  <About />
  <Projects />
</div>
<div class="page-loader" />

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
