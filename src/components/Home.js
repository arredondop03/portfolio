import React from 'react'
import  '../App.css'
import HomePageLinks from './HomePageLinks'
import AboutMe from './AboutMe';
import NavBar from './NavBar'


function Home() {
  return (
    <div>
      <div className="hero">
      <NavBar />
        <h1 class='home-title-1'> Hi! </h1>
        <h2 class='home-title-2'>Welcome to my Portfolio </h2>
        
      </div>
    </div>
  )
}

export default Home

