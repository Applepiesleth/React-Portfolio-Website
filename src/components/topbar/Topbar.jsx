import "./topbar.scss"
import { useMediaQuery } from "@material-ui/core";
import { MobileLinks } from "./MobileLinks"
import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

export function useWindowDimensions() {
const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

useEffect(() => {
    function handleResize() {
    setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

return windowDimensions;
}

export default function Topbar() {
  const isMobile = useWindowDimensions().width <= 850;
  return (
    <div className="topbar">
        <div className="wrapper">
            {!isMobile && (
            <div className="left">
                
                <a href="#intro" className="logo">Ronan Sandoval</a>
                <div className="linksContainer">
                    <a href="#intro" className="link">About Me</a>
                    <a href="#portfolio" className="link">Portfolio</a>
                    <a href="#works" className="link">Works</a>
                    <a href="#contact" className="link">Contact</a>
                </div>
            </div>)}
            <div className="right">
                {isMobile && <MobileLinks/>}
            </div>
        </div>  
    </div>
  )
}
