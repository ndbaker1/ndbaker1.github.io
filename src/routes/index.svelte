<script lang="ts">
  import { onMount } from 'svelte'

  import { Theme } from '../services/theme.service'
  import { KeyMaps } from '../services/keymap.service'

  import Navbar from '../components/Navbar.svelte'
  import About from '../components/About.svelte'
  import Projects from '../components/Projects.svelte'
  import CommandBar from '../components/CommandBar.svelte'
  import NavigationWindow from '../components/NavigationWindow.svelte'
  import Footer from '../components/Footer.svelte'
  import PageLoader from '../components/PageLoader.svelte'

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
<Footer />

<PageLoader />
<NavigationWindow />
