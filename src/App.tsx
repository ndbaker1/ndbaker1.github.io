import { Component } from 'solid-js'
import './App.scss'

import { Education, Items, LabelledList, Section } from './Resume'


const App: Component = () => {
  return (
    <Resume />
  )
}

export default App


const Resume: Component = () => {
  return (
    <div id='resume'>

      <CustomInfo />

      <div id="side">
        <Section title='education'>
          <Education
            title="M.S. in Cyber Security"
            location='University of Texas at Dallas'
            date='August 2022 - Present' />

          <Education
            title="B.S. in Computer Science"
            location='University of Texas at Dallas'
            date='August 2019 - May 2022' />
        </Section>

        <Section title='skills'>
          <LabelledList
            listLabel='Tools'
            items={[
              'Docker', 'React', 'Angular', 'Spring', 'Hibernate',
              'Jenkins', 'PostgreSQL', 'Terraform', 'Maven',
              'Google Cloud Platform', 'Android', 'OAuth', 'Svelte',
            ]} />

          <LabelledList
            listLabel='Languages'
            items={[
              'Rust', 'Kotlin', 'Typescript & Javascript', 'Python',
              'HTML/CSS', 'Java', 'C/C++', 'SQL', 'GraphQL', 'Bash',
            ]} />
        </Section>
      </div>

      <div id="main">
        <Section title='work experience'>
          <Items
            type='work'
            position='AWS SDE Intern'
            company='AWS SageMaker'
            location='Seattle, Washington'
            date='May - August 2022'
            items={[
              'Created a data lake built on data flow through DynamoDB and showcased queries and transformations on the data',
            ]} />

          <Items
            type='work'
            position='Software Developer'
            company='Tritech Software Development'
            date='June 2020 - March 2022'
            location='Allen, TX'
            items={[
              `Contributed towards replatforming a monolithic Java product to a Cloud Provider and refactoring it into REST microservices using Kotlin, Spring, Hibernate, and PostgreSQL`,
              `Supervised Auth0 integrations and configured several extensions to the authentication pipelines`,
              `Provisioned and maintained cloud environments using Terraform and created Jenkins CI/CD jobs to orchestrate builds, dockerization, artifact staging, and deployments`,
              `Led the process of bringing frontend (Angular) development in-house from a consulting partner`,
              `Set up end-to-end testing pipeline through Cypress and Jenkins CI/CD`,
              `Updated ETL Batch jobs aggregating data for Apache Superset`
            ]} />
        </Section>

        <Section title='competitions'>
          <Items
            type='competition'
            event='HackUTD VI: News Unchained'
            dateAndPlace='November 2019 | Richardson, TX'
            items={[
              `Chrome extension to scan online articles and identify bias using Google Cloud Natural Language API`,
              `1st place winner for Best Text Objectivity Analysis (sponsored by Cognizant)`,
            ]} />

          <Items
            type='competition'
            event='HackUTD VII: Lend-A-Hand'
            dateAndPlace='February 2021 | Richardson, TX'
            items={[
              `Web App that provides a forum for sharing/lending tools to those in your community`,
              `2st place winner for Texas Outage Recovery Solution (sponsored by StateFarm)`,
            ]} />
        </Section>
      </div>
    </div >
  )
}

const CustomInfo: Component = () => {
  return (
    <div id="header">
      <h2>Nicholas Baker</h2>
      <div>
        <p>
          <img src="https://img.icons8.com/material-rounded/192/ffffff/address.png" width="20px" />
          &nbsp;
          Plano, TX
        </p >
        <p>
          <img src="https://img.icons8.com/fluency-systems-filled/96/ffffff/phone.png" width="20px" />
          &nbsp;
          (972) 330-6048
        </p >
        <p>
          <img src="https://img.icons8.com/material-rounded/192/ffffff/mail.png" width="20px" />
          &nbsp;
          <a href="mailto:ndbaker1@outlook.com" target='_blank'>ndbaker1@outlook.com</a>
        </p>
        <p>
          <img src="https://img.icons8.com/ios-glyphs/120/ffffff/repository.png" width="20px" />
          &nbsp;
          <a href="https://github.com/ndbaker1" target='_blank'>github.com/ndbaker1</a>
        </p>
      </div>
    </div>
  )
}