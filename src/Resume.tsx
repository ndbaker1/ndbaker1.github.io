import { Component, For, ParentProps } from 'solid-js'
import './Resume.scss'


type LabelledListProps = {
  listLabel: string
  items: string[]
}
export const LabelledList: Component<LabelledListProps> = (props) => {
  return (
    <>
      <h4> {props.listLabel} </h4>
      <p> {props.items.join(', ')} </p>
    </>
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
      <h5> {props.title} </h5>
      <p> {props.location} </p>
      <p>
        <img src="https://img.icons8.com/material-outlined/192/calendar--v1.png" width="20px" />
        &nbsp;
        {props.date}
      </p>
    </div>
  )
}

type SectionProps = ParentProps & {
  title: string
}

export const Section: Component<SectionProps> = (props) => {
  return (
    <div>
      <h3 class="section-title">{props.title}</h3>
      <hr />
      {props.children}
    </div>
  )
}

type BulletedItemProps = {
  type: 'competition'
  event: string
  dateAndPlace: string
  items: string[]
} | {
  type: 'work'
  position: string
  location: string
  company: string
  date: string
  items: string[]
}


export const Items: Component<BulletedItemProps> = (props) => {
  if (props.type === 'work') {
    return (
      <div class="summary">
        <h4> {props.position} </h4>
        <p> {props.company} <br /> {props.date} | {props.location} </p>
        <ul>
          <For each={props.items}>
            {note => <li> <p> {note} </p> </li>}
          </For>
        </ul>
      </div>
    )
  } else if (props.type === 'competition') {
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
}
