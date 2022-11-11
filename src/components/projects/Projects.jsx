import "./projects.scss"
import { ProjectList } from "./ProjectList"
import { useEffect, useState } from 'react';
import { gamesProjects, featuredProjects, appProjects , otherProjects} from "./data";

export default function Projects() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "games",
      title: "Games",
    },
    {
      id: "apps",
      title: "Apps",
    },
    {
      id: "other",
      title: "Other",
    },
  ]

  useEffect(() => {

    switch(selected) {
      case "games":
        setData(gamesProjects);
        break;
      case "featured":
        setData(featuredProjects);
        break;
      case "apps":
        setData(appProjects);
        break;
      case "other":
          setData(otherProjects);
          break;
      default:
        setData(gamesProjects);
    }

  }, [selected])

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div class="help"> Click on a project to see more information </div>
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
            <a href={d.link} rel="noopener noreferrer">
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

// target="_blank"