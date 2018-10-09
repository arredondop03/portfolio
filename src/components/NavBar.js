import React from 'react'

function NavBar(){
  return(
    <div className="nav-bar">
      <ul className="nav-bar-ul">
      <a href="#about-me">
        <li>About Me</li>
        </a>
      <a href="#my-work">
        <li>My work</li>
        </a>
        <a href="#contact-me">
        <li>Contact</li>
        </a>
      </ul>
    </div>
  )

}

export default NavBar