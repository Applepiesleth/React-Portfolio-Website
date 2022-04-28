import "./skills.scss"

export default function Gallery() {
  return (
    <div className='skills' id="skills">
      <h1>Skills</h1>
      <div className="techSkills">
        <h2>Languages</h2>
        <div className="skillSlot">
          <p>Java</p>
          <p>Python</p>
          <p>C++</p>
          <p>C#</p>
          <p>Matlab</p>
          <p>SQL</p>
          <p>MongoDB</p>
          <p>HTML/CSS</p>
          <p>Javascript</p>
        </div>
        <h2>Libraries / APIs / Frameworks</h2>
        <div className="skillSlot">
          <p>WebGL</p>
          <p>PyTorch</p>
          <p>React</p>
        </div>
        <h2>Software / Game Dev</h2>
        <div className="skillSlot">
          <p>Unity</p>
          <p>Godot</p>
          <p>Android Studio</p>
          <p>Firebase</p>
          <p>Cybera</p>
        </div>
        <h2>Other</h2>
        <div className="skillSlot">
          <p>Git</p>
          <p>OOP</p>
          <p>Linux</p>
          <p>LaTeX</p>
        </div>
      </div>
    </div>
  )
}
