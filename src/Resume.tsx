import { Component, For } from 'solid-js'
import './Resume.scss'

export const Resume = () => {
  return (
    <div id='resume'>
      <div id="header">
        <Info />
      </div>
      <div id="side">
        <EducationSection />
        <SkillsSection />
      </div>
      <div id="main">
        <WorkSection />
        <CompetitionSection />
      </div>
    </div>
  )
}

const Info: Component = () => {
  return (
    <>
      <h2>Nicholas Baker</h2>
      <div>
        <p><img src="https://img.icons8.com/material-rounded/192/ffffff/address.png" width="20px" /> Plano, TX</p >
        <p><img src="https://img.icons8.com/fluency-systems-filled/96/ffffff/phone.png" width="20px" /> (972) 330-6048</p >
        <p><img src="https://img.icons8.com/material-rounded/192/ffffff/mail.png" width="20px" />
          <a href="mailto:ndbaker1@outlook.com">ndbaker1@outlook.com</a>
        </p>
        <p><img src="https://img.icons8.com/ios-glyphs/120/ffffff/repository.png" width="20px" />
          <a href="https://github.com/ndbaker1">github.com/ndbaker1</a>
        </p>
      </div>
    </>
  )
}

const EducationSection: Component = () => {
  const Education: Component<{
    title: string
    location: string
    date: string
  }> = (props) => {
    return (
      <div>
        <h4> {props.title} </h4>
        <p> {props.location} </p>
        <p>
          <img src="https://img.icons8.com/material-outlined/192/calendar--v1.png" width="20px" />
          {props.date}
        </p>
      </div>
    )
  }
  return (
    <div id="education">
      <h2 class="section-title">education</h2>
      <hr />

      <Education
        title="M.S. in Cyber Security"
        location='University of Texas at Dallas'
        date='August 2022 - Present' />

      <Education
        title="B.S. in Computer Science"
        location='University of Texas at Dallas'
        date='August 2019 - May 2022' />

    </div>
  )
}

const SkillsSection: Component = () => {
  return (
    <div id="skills">
      <h2 class="section-title">skills</h2>
      <hr />
      <div>
        <h4>Tools</h4>
        <p>
          Docker, React, Angular, Spring, Hibernate, Jenkins, PostgreSQL, Terraform, Maven, Google Cloud Platform,
          Android, OAuth, Svelte
        </p>
        <h4>Languages</h4>
        <p>
          Rust, Kotlin, Typescript & Javascript, Python, HTML/CSS, Java, C/C++, SQL, GraphQL, Shell Scripting
        </p>
      </div>
    </div>
  )
}

const WorkSection: Component = () => {
  const Work: Component<{
    position: string
    location: string
    company: string
    date: string
    items: string[]
  }> = (props) => {
    return (
      <div class="summary">
        <h4>{props.position}</h4>
        <p>{props.company} <br /> {props.date} | {props.location} </p>

        <ul>
          <For each={props.items}>
            {note => <li> <p> {note} </p> </li>}
          </For>
        </ul>
      </div>
    )
  }

  return (
    <div>
      <h2 class="section-title">work experience</h2>
      <hr />
      <Work
        position='Software Development Engineer Intern'
        company='Amazon Web Services'
        location='Seattle, Washington'
        date='May 2022 - Present'
        items={['AWS SageMaker']} />

      <Work
        position='Software Developer'
        company='Tritech Software Development'
        date='June 2020 - March 2020'
        location='Allen, TX'
        items={[
          `Contributed towards replatforming a monolithic Java product to a Cloud Provider and refactoring it into REST microservices using Kotlin, Spring, Hibernate, and PostgreSQL`,
          `Supervised Auth0 integrations and configured several extensions to the authentication pipelines`,
          `Provisioned and maintained cloud environments using Terraform and created Jenkins CI/CD jobs to orchestrate builds, dockerization, artifact staging, and deployments`,
          `Led the process of bringing frontend (Angular) development in-house from a consulting partner`,
          `Set up end-to-end testing pipeline through Cypress and Jenkins CI/CD`,
          `Updated ETL Batch jobs aggregating data for Apache Superset`
        ]} />
    </div>
  )
}

const CompetitionSection: Component = () => {
  return (
    <>
      <h2 class="section-title">competitions</h2>
      <hr />

      <div class="summary">
        <h4> HackUTD VII: Lend-A-Hand </h4>
        <p> February 2021 | Richardson, TX </p>
        <ul>
          <li>
            <p>
              Web App that provides a forum for sharing/lending tools to those in your community
            </p>
          </li>
          <li>
            <p>
              2st place winner for Texas Outage Recovery Solution (sponsored by StateFarm)
            </p>
          </li>
        </ul>
      </div>

      <div class="summary">
        <h4> HackUTD VI: News Unchained </h4>
        <p> November 2019 | Richardson, TX </p>
        <ul>
          <li>
            <p>
              Chrome extension to scan online articles and identify bias using Google Cloud Natural Language API
            </p>
          </li>
          <li>
            <p>
              1st place winner for Best Text Objectivity Analysis (sponsored by Cognizant)
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}