import "./intro.scss"
import { FaGithub, FaItchIo, FaTwitter, FaLinkedin, FaPaintBrush} from 'react-icons/fa';

export default function Intro() {
  return (
    <div className="intro" id="intro">
        <div className="left">
            <h1>Hello there!</h1>
            <p>I am a Computing Science Student in the University of Alberta with an interest
                in <b>software</b> and <b>game development</b>! I enjoy UI design and digital art as well.</p>
            <div className="iconList">
                <a href="https://github.com/RonanSandoval" target="_blank" rel="noopener noreferrer"><FaGithub className="icon"/></a>
                <a href="https://applepiesleth.itch.io/" target="_blank" rel="noopener noreferrer"><FaItchIo className="icon"/></a>
                {/* <a href="https://applepiesleth.carrd.co/" target="_blank" rel="noopener noreferrer"><FaPaintBrush className="icon"/></a> */}
                <a href="https://www.linkedin.com/in/ronansandoval/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon"/></a>
            </div>
        </div>
        <div className="right">
            <img src="./images/dog.png" alt="DOG"></img>
        </div>
        
        
    </div>
  )
}
