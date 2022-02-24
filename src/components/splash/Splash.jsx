import "./splash.scss"
import Pdf from '../../Ronan_Sandoval_Resume.pdf';

export default function Splash() {
  return (
    <div className="splash" id="splash">
        <div className="box">
          <h1>Ronan Sandoval</h1>
          <h2>Software Dev · Game Dev · Digital Art</h2>
          <a href = {Pdf} target = "_blank">View My Resume</a>
        </div>
    </div>
  )
}
