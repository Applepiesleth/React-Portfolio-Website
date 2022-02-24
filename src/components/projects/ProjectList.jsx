import React from 'react'
import "./projects.scss"

export function ProjectList({id, title, active, setSelected}) {
  return (
      <li className={active ? 'projectList active' : 'projectList'}
      onClick={()=>setSelected(id)}>
          {title}
      </li>
  )
}
