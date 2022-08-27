import { Component } from 'solid-js'
import './App.scss'
import './styles/scrollbar.css'

import { Education, Items, LabelledList, Section } from './Resume'

import portfolio from '../assets/portfolio.yaml'


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
          {portfolio.education.map(edu => (
            <Education
              title={edu.title}
              location={edu.school}
              date={edu.date} />
          ))}
        </Section>

        <Section title='skills'>
          <LabelledList
            listLabel='Tools'
            items={portfolio.skills.tools} />

          <LabelledList
            listLabel='Languages'
            items={portfolio.skills.languages} />
        </Section>
      </div>

      <div id="main">
        <Section title='work experience'>
          {portfolio.work.map(work => (
            <Items
              type='work'
              position={work.position}
              company={work.company}
              location={work.location}
              date={work.date}
              items={work.items} />
          ))}
        </Section>

        <Section title='competitions'>
          {portfolio.competitions.map(comp => (
            <Items
              type='competition'
              event={comp.event}
              dateAndPlace={comp.date + " | " + comp.location}
              items={comp.items} />
          ))}
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