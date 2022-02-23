import "./topbar.scss"
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
    const isMobile = useWindowDimensions().width <= 860;
    const isTight = useWindowDimensions().width <= 380;
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    {!isTight && <a href="#splash" className="logo">Ronan Sandoval</a>}
                    {!isMobile && (
                        <div className="left">
                            <div className="linksContainer">
                                <a href="#intro" className="link">About Me</a>
                                <a href="#projects" className="link">Projects</a>
                                <a href="#gallery" className="link">Gallery</a>
                                <a href="#contact" className="link">Contact</a>
                            </div>
                        </div>)}
                </div>
                {isMobile && <MobileLinks className="right"/>}
            </div>
        </div>
    )
}
