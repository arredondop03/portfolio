import React from 'react'
import logo from '../diamond-only.svg'

function NavBar(){
  return(
    <div className="nav-bar">
    <img src={logo} className="nav-bar-logo" />
      <ul className="nav-bar-ul">
        <li>About Me</li>
        <li>My work</li>
        <li>Contact</li>
      </ul>
    </div>
  )

}

export default NavBar