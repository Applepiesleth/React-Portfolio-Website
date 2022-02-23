import "./topbar.scss"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Ronan Sandoval</a>
                <div className="linksContainer">
                    <a href="#intro" className="link">About Me</a>
                    <a href="#portfolio" className="link">Portfolio</a>
                    <a href="#works" className="link">Works</a>
                    <a href="#contact" className="link">Contact</a>
                </div>
            </div>
            <div className="right">
            </div>
        </div>  
    </div>
  )
}
