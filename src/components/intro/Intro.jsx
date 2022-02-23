import "./intro.scss"
import { FaGithub, FaItchIo, FaTwitter, FaLinkedin, FaPaintBrush} from 'react-icons/fa';

export default function Intro() {
  return (
    <div className="intro" id="intro">
        <div className="left">
            <h1>Hello there!</h1>
            <p>I am a Computing Science Student from the University of Alberta with an interest 
                in <b>software dev</b>, <b>game dev</b>, and <b>digital art</b>!</p>
            <div className="iconList">
                <a href="https://github.com/Applepiesleth" target="_blank" rel="noopener noreferrer"><FaGithub className="icon"/></a>
                <a href="https://applepiesleth.itch.io/" target="_blank" rel="noopener noreferrer"><FaItchIo className="icon"/></a>
                <a href="https://twitter.com/applepiesleth" target="_blank" rel="noopener noreferrer"><FaPaintBrush className="icon"/></a>
                <a href="https://www.linkedin.com/in/ronansandoval/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon"/></a>
            </div>
        </div>
        <div className="right"></div>
        
        
    </div>
  )
}
