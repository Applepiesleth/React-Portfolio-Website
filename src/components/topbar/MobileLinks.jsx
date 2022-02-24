import React, { useState } from "react";
import Hamburger from 'hamburger-react'
import "./mobileLinks.scss"

export function MobileLinks() {
  const [isOpen, setOpen] = useState(false)

  return (
      
    <div class="mobileLinksContainer">
        <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} className="hamburger"/>
        {isOpen && (<div className="mobileLinksWrapper">
            <a onClick={()=>setOpen(false)} href="#intro" className="mobileLink">About Me</a>
            <a onClick={()=>setOpen(false)} href="#projects" className="mobileLink">Projects</a>
            <a onClick={()=>setOpen(false)} href="#skills" className="mobileLink">Skills</a>
            <a onClick={()=>setOpen(false)} href="#contact" className="mobileLink">Contact</a>
        </div>)}
    </div>
  )
}
