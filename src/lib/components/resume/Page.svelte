<script>
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
          alt="location"
          src="https://img.icons8.com/material-rounded/192/ffffff/address.png"
          width="20px"
        />
        &nbsp;
        <p>Seattle, WA</p>
      </div>
      <div>
        <img
          alt="phone"
          src="https://img.icons8.com/fluency-systems-filled/96/ffffff/phone.png"
          width="20px"
        />
        &nbsp;
        <p>(972) 330-6048</p>
      </div>
      <div>
        <img
          alt="email"
          src="https://img.icons8.com/material-rounded/192/ffffff/mail.png"
          width="20px"
        />
        &nbsp;
        <a href="mailto:ndbaker1@outlook.com" target="_blank noreferrer">ndbaker1@outlook.com</a>
      </div>
      <div>
        <img
          alt="github"
          src="https://img.icons8.com/ios-glyphs/120/ffffff/repository.png"
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

    <Section title="achievements">
      {#each portfolio.achievements as ev}
        <div class="small flex justify-between pr-4">
          <p>{ev.title}</p>
          <p>{ev.info}</p>
        </div>
      {/each}
    </Section>

    <Section title="independent projects">
      {#each portfolio.projects as proj}
        <p class="small">
          <a href={proj.link} class="font-bold">
            {proj.name}
          </a>
          | {proj.date}
        </p>
        <p class="small">
          {proj.description}
        </p>
      {/each}
    </Section>
  </div>
</div>

<style>
  * {
    font-family: 'Lucida Sans Unicode', 'Lucida Sans', sans-serif;
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
    grid-area: header;
    background-color: rgb(57, 57, 57);
    color: whitesmoke;
    padding: 1.5rem;
  }

  #header > .header-items > div {
    display: flex;
  }

  #side {
    grid-area: side;
    background-color: rgb(250, 250, 250);
    padding: 1.5rem;
  }

  #main {
    grid-area: main;
    background-color: white;
    padding: 1.5rem;
  }
</style>
