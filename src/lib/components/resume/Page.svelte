<script lang="ts">
  import Items from './Items.svelte';
  import Section from './Section.svelte';
  import Education from './Education.svelte';

  import portfolio from '$lib/ndbaker1/portfolio.yml';
</script>

<div id="resume">
  <div id="header">
    <h2 class="text-xl text-center">Nicholas Baker</h2>
    <br />
    <div class="text-sm header-items">
      <div>
        <img
          alt="phone"
          src="https://img.icons8.com/fluency-systems-filled/96/000000/phone.png"
          width="20px"
        />
        &nbsp;
        <p>(972) 330-6048</p>
      </div>
      <div>
        <img
          alt="email"
          src="https://img.icons8.com/material-rounded/192/000000/mail.png"
          width="20px"
        />
        &nbsp;
        <a href="mailto:ndbaker1@outlook.com" target="_blank noreferrer">ndbaker1@outlook.com</a>
      </div>
      <div>
        <img
          alt="github"
          src="https://img.icons8.com/ios-glyphs/120/000000/repository.png"
          width="20px"
        />
        &nbsp;
        <a href="https://github.com/ndbaker1" target="_blank noreferrer">github.com/ndbaker1</a>
      </div>
    </div>
  </div>

  <div id="side">
    <Section title="education">
      {#each portfolio.education as edu}
        <Education date={edu.date} location={edu.school} title={edu.title} />
      {/each}
    </Section>

    <Section title="tools">
      <p class="small">{portfolio.skills.tools.join(', ')}</p>
    </Section>

    <Section title="languages">
      <p class="small">{portfolio.skills.languages.join(', ')}</p>
    </Section>

    <Section title="interests">
      {#each portfolio.interests as interest}
        <p class="small">{interest}</p>
      {/each}
    </Section>
  </div>

  <div id="main">
    <Section title="experience">
      {#each portfolio.experience as experience}
        <Items
          position={experience.position}
          company={experience.company}
          location={experience.location}
          date={experience.date}
          items={experience.items}
        />
      {/each}
    </Section>

    <Section title="accomplishments">
      {#each portfolio.accomplishments as ac}
        <div class="small flex flex-row pr-4">
          {#if ac.link}
            <a href={ac.link} target="_blank">{ac.name}</a>
            &nbsp;
            <p class="tiny">🔗</p>
          {:else}
            <p>{ac.name}</p>
          {/if}
        </div>
      {/each}
    </Section>
  </div>
</div>

<style>
  @reference "tailwindcss";

  * {
    font-family: "Source Sans 3", sans-serif;
  }

  @media print {
    @page {
      size: letter;
    }
  }

  #resume {
    /* dimensions of letter paper */
    width: 8.5in;
    height: 11in;
    /* remove top/bottom margins and center */
    margin: 0 auto;
    /* organize other components in a grid */
    display: grid;
    grid-auto-columns: 14rem auto;
    grid-auto-rows: min-content 1fr;
    grid-template-areas:
      'header main'
      'side main';

    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    overflow: clip;
    background-color: white;
  }

  .small {
    font-size: 0.7rem;
    margin: 0.2rem 0;
    align-items: center;
  }

  img {
    vertical-align: bottom;
  }

  #header {
    position: relative;
    grid-area: header;
    padding: 1.5rem;
  }

  /* vertical line between header and main, with gaps at the page edge and intersection */
  #header::before {
    content: "";
    position: absolute;
    top: 4px;
    bottom: 4px;
    right: 0;
    border-right: 1px solid #ccc;
  }

  /* horizontal line under the header, with gaps at the page edge and intersection */
  #header::after {
    content: "";
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 0;
    border-bottom: 1px solid #ccc;
  }

  #header > .header-items > div {
    display: flex;
  }

  #side {
    position: relative;
    grid-area: side;
    padding: 1.5rem;
  }

  /* vertical line between side and main, with gaps at the page edge and intersection */
  #side::after {
    content: "";
    position: absolute;
    top: 4px;
    bottom: 4px;
    right: 0;
    border-right: 1px solid #ccc;
  }

  #main {
    grid-area: main;
    background-color: white;
    padding: 1.5rem;
  }
</style>
