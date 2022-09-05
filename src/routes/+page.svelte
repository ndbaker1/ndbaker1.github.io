<script lang="ts">
  import About from '$lib/components/About.svelte';
  import CommandBar from '$lib/components/CommandPalette.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import PageLoader from '$lib/components/PageLoader.svelte';
</script>

<PageLoader />
<Navbar />
<div class="min-h-screen max-w-screen-md m-auto px-5 content">
  <About />
  <Footer />
  <CommandBar />
</div>

<style>
  * {
    font-family: 'Fira Code', serif;
    letter-spacing: 2px;
  }

  .content {
    display: grid;
    grid-template-rows: 1fr min-content;
  }
</style>
