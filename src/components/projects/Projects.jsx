import "./projects.scss"
import { ProjectList } from "./ProjectList"
import { useEffect, useState } from 'react';
import { gamesProjects, artProjects, softwareProjects } from "../../data";

export default function Projects() {
  const [selected, setSelected] = useState("games")
  const [data, setData] = useState([])
  const list = [
    {
      id: "games",
      title: "Games",
    },
    {
      id: "software",
      title: "Software",
    },
    {
      id: "art",
      title: "Art",
    },
    
  ]

  useEffect(() => {

    switch(selected) {
      case "games":
        setData(gamesProjects);
        break;
      case "art":
        setData(artProjects);
        break;
      case "software":
        setData(softwareProjects);
        break;
      default:
        setData(gamesProjects);
    }

  }, [selected])

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        {list.map(item=>(
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            />
        ))}
      </ul>

      <div className="container">
        {data.map(d=>(
          <div className="item">
            <a href={d.link} target="_blank" rel="noopener noreferrer">
              <div className="imgblock">
                <img src={d.img} alt=""/>
              </div>
              <h3>{d.title}</h3>
              <p className="date">{d.date}</p>
              <p className="desc">{d.desc}</p>
              <p className="tools">{d.tools}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
