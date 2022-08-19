import { Component, For, ParentProps } from 'solid-js'
import './Resume.scss'


export const Info: Component = () => {
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

export const SkillsSection: Component = () => {
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

type EducationProps = {
  title: string
  location: string
  date: string
}

export const Education: Component<EducationProps> = (props) => {
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

type WorkProps = {
  position: string
  location: string
  company: string
  date: string
  items: string[]
}

export const Work: Component<WorkProps> = (props) => {
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

type SectionProps = ParentProps & {
  title: string
}

export const Section: Component<SectionProps> = (props) => {
  return (
    <div>
      <h2 class="section-title">{props.title}</h2>
      <hr />
      {props.children}
    </div>
  )
}

type CompetitionProps = {
  event: string
  dateAndPlace: string
  items: string[]
}

export const Competition: Component<CompetitionProps> = (props) => {
  return (
    <div class="summary">
      <h4> {props.event} </h4>
      <p> {props.dateAndPlace} </p>
      <ul>
        <For each={props.items}>
          {item => <li> <p> {item} </p> </li>}
        </For>
      </ul>
    </div>
  )
}
