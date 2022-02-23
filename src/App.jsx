import Splash from "./components/splash/Splash";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Splash/>
        <Intro/>
        <Projects/>
        <Gallery/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
