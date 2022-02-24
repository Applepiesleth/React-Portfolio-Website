import "./projects.scss"

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        <li className="active">Games</li>
        <li>Art</li>
        <li>Software</li>
      </ul>

      <div className="container">
        <div className="item">
          <img src="https://img.itch.zone/aW1nLzU5NDI1ODYucG5n/347x500/koKQzb.png" alt=""/>
          <h3>Fallen</h3>
          <p>A challenging game all about helping others down on earth after being kicked out of Heaven 
            for trying to steal the Sky God's powerful amulet.</p>
          <p className="tools">RPG Maker</p>
        </div>
        <div className="item">
          <img src="https://img.itch.zone/aW1nLzczODYxODcucG5n/347x500/88quuF.png" alt=""/>
          <h3>Outback Outrun</h3>
          <p>You are emu. Eat grape popsicles. Avoid Australian creatures.</p>
          <p className="tools">Godot</p>
        </div>
        <div className="item">
          <img src="https://img.itch.zone/aW1hZ2UvMTM3NzQwNi84MjQxOTQ4LnBuZw==/original/kIG8kq.png" alt=""/>
          <h3>Odd Socks</h3>
          <p>A game where you reunite long lost socks.</p>
          <p className="tools">Godot</p>
        </div>
      </div>
    </div>
  )
}
