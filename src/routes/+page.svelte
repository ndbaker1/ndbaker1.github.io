<script lang="ts">
  import About from '$lib/components/About.svelte'
  import CommandBar from '$lib/components/CommandBar.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import Navbar from '$lib/components/Navbar.svelte'
  import NavigationWindow from '$lib/components/NavigationWindow.svelte'
  import PageLoader from '$lib/components/PageLoader.svelte'
  import Projects from '$lib/components/Projects.svelte'
</script>

<PageLoader />
<Navbar />

<div class="max-w-screen-md m-auto px-5">
  <About />
  <Projects />
</div>

<CommandBar />
<NavigationWindow />

<Footer />
