<script lang="ts">
  import Items from './Items.svelte';
  import Section from './Section.svelte';
  import Education from './Education.svelte';

  import portfolio from '#lib/ndbaker1/portfolio.yml';
</script>

<div id="resume">
  <div id="header">
    <h2 class="text-center name">Nicholas Baker</h2>
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
            |
      <div>
        <img
          alt="email"
          src="https://img.icons8.com/material-rounded/192/000000/mail.png"
          width="20px"
        />
        &nbsp;
        <a href="mailto:ndbaker1@outlook.com" target="_blank" rel="noreferrer">ndbaker1@outlook.com</a>
      </div>
            |
      <div>
        <img
          alt="github"
          src="https://img.icons8.com/ios-glyphs/120/000000/repository.png"
          width="20px"
        />
        &nbsp;
        <a href="https://github.com/ndbaker1" target="_blank" rel="noreferrer">github.com/ndbaker1</a>
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
  * {
    font-family: "Source Sans 3", sans-serif;
  }

  @media print {
    @page {
      size: letter;
      margin: 0;
    }
  }

  #resume {
    /* letter-size paper; grows to a second page if content overflows */
    width: 8.5in;
    min-height: 11in;
    /* remove top/bottom margins and center */
    margin: 0 auto;
    /* organize other components in a grid */
    display: grid;
    grid-auto-columns: 14rem auto;
    grid-auto-rows: min-content 1fr;
    grid-template-areas:
      'header header'
      'side main';
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    background-color: white;
  }

  .small {
    font-size: 0.75rem;
    margin: 0.2rem 0;
  }

  img {
    vertical-align: bottom;
  }

  #header {
    position: relative;
    grid-area: header;
    margin-top: 1rem;
    padding: 1rem;
  }

  #header > .name {
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 2px;
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

  /* center the contact row to match the centered name */
  #header .header-items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    opacity: 0.6;
    gap: 1rem;
  }

  #header .header-items > div {
    display: flex;
    align-items: center;
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
