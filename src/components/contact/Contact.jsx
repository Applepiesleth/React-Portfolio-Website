import { useState } from "react";
import "./contact.scss"

export default function Contact() {
  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className='contact' id="contact">
        <div className="left"></div>

        <div className="right">
          <h2>Contact Me</h2>
          {/* <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email"/>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Message sent!</span>}
          </form> */}
          
          <h1><a href="mailto:ronanchr@ualberta.ca?">ronanchr@ualberta.ca</a></h1>
        </div>
    </div>
  )
}
