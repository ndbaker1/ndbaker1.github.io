import './Resume.scss'

type LabelledListProps = {
  listLabel: string
  items: string[]
}
export const LabelledList = (props) => {
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

export const Education = (props) => {
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

type SectionProps = {
  title: string
}

export const Section = (props) => {
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


export const Items = (props) => {
  if (props.type === 'work') {
    return (
      <div class="summary">
        <h4> {props.position} </h4>
        <p> {props.company} <br /> {props.date} | {props.location} </p>
        <ul>
          {props.items.map(note => (
            <li> <p> {note} </p> </li>
          ))}
        </ul>
      </div>
    )
  } else if (props.type === 'competition') {
    return (
      <div class="summary">
        <h4> {props.event} </h4>
        <p> {props.dateAndPlace} </p>
        <ul>
          {props.items.map(note => (
            <li> <p> {note} </p> </li>
          ))}
        </ul>
      </div>
    )
  }
}
