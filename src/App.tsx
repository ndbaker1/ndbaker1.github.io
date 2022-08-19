import { Component } from 'solid-js'
import './App.scss'

import { Competition, Education, Info, Section, SkillsSection, Work } from './Resume'


const App: Component = () => {
  return (
    <div id='resume'>
      <div id="header">
        <Info />
      </div>
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

        <SkillsSection />
      </div>
      <div id="main">
        <Section title='work experience'>
          <Work
            position='AWS Software Development Engineer Intern'
            company='AWS SageMaker'
            location='Seattle, Washington'
            date='May - August 2022'
            items={['AWS SageMaker']} />

          <Work
            position='Software Developer'
            company='Tritech Software Development'
            date='June - March 2020'
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
          <Competition
            event='HackUTD VI: News Unchained'
            dateAndPlace='November 2019 | Richardson, TX'
            items={[
              `Chrome extension to scan online articles and identify bias using Google Cloud Natural Language API`,
              `1st place winner for Best Text Objectivity Analysis (sponsored by Cognizant)`,
            ]} />

          <Competition
            event='HackUTD VII: Lend-A-Hand'
            dateAndPlace='February 2021 | Richardson, TX'
            items={[
              `Web App that provides a forum for sharing/lending tools to those in your community`,
              `2st place winner for Texas Outage Recovery Solution (sponsored by StateFarm)`,
            ]} />
        </Section>
      </div>
    </div>
  )
}

export default App
