<script>
  import Education from '$lib/components/Education.svelte'

  import Items from '$lib/components/Items.svelte'
  import Section from '$lib/components/Section.svelte'

  import portfolio from '$lib/portfolio.yaml'
</script>

<div id="resume">
  <div id="header">
    <h2>Nicholas Baker</h2>
    <div>
      <p>
        <img
          alt="location"
          src="https://img.icons8.com/material-rounded/192/ffffff/address.png"
          width="20px"
        />
        &nbsp; Plano, TX
      </p>
      <p>
        <img
          alt="phone"
          src="https://img.icons8.com/fluency-systems-filled/96/ffffff/phone.png"
          width="20px"
        />
        &nbsp; (972) 330-6048
      </p>
      <p>
        <img
          alt="email"
          src="https://img.icons8.com/material-rounded/192/ffffff/mail.png"
          width="20px"
        />
        &nbsp;
        <a href="mailto:ndbaker1@outlook.com" target="_blank">ndbaker1@outlook.com</a>
      </p>
      <p>
        <img
          alt="github"
          src="https://img.icons8.com/ios-glyphs/120/ffffff/repository.png"
          width="20px"
        />
        &nbsp;
        <a href="https://github.com/ndbaker1" target="_blank">github.com/ndbaker1</a>
      </p>
    </div>
  </div>

  <div id="side">
    <Section title="education">
      {#each portfolio.education as edu}
        <Education props={edu} />
      {/each}
    </Section>

    <Section title="skills">
      <h4>Tools</h4>
      <p>{portfolio.skills.tools.join(', ')}</p>
      <h4>Languages</h4>
      <p>{portfolio.skills.languages.join(', ')}</p>
    </Section>
  </div>

  <div id="main">
    <Section title="work experience">
      {#each portfolio.work as work}
        <Items
          type="work"
          position={work.position}
          company={work.company}
          location={work.location}
          date={work.date}
          items={work.items}
        />
      {/each}
    </Section>

    <Section title="competitions">
      {#each portfolio.competitions as comp}
        <Items
          type="competition"
          event={comp.event}
          dateAndPlace={comp.date + ' | ' + comp.location}
          items={comp.items}
        />
      {/each}
    </Section>
  </div>
</div>

<style>
  #resume {
    /* dimensions of letter paper */
    width: 8.5in;
    height: 11in;
    /* remove top/bottom margins and center */
    margin: 0 auto;
    /* organize other components in a grid */
    display: grid;
    grid-auto-columns: 18rem auto;
    grid-auto-rows: min-content 1fr;
    grid-template-areas:
      'header main'
      'side main';

    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 0.85rem;
    margin: 0.2rem 0;
    align-items: center;
  }

  img {
    vertical-align: bottom;
  }

  h2,
  h4 {
    margin-bottom: 0;
  }

  #header {
    grid-area: header;
    background-color: rgb(57, 57, 57);
    color: whitesmoke;
    padding: 1.5rem;
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
