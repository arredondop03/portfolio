import React from 'react'
import NavBar from './NavBar'

function Hero() {
  return (
    <div className="hero">
      <NavBar />
      <div className="hero-content">
        <div className="test">
          <img src="/pink-watercolor.jpg" alt="watercolor-image" className="hero-watercolor-image" />
          <h1 className='home-title-1'> Hi! I'm Paola </h1>
          <h2 className='home-title-2'>A full stack web developer</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero