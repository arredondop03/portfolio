import React from 'react'
import HomePageLinks from './HomePageLinks'
import AboutMe from './AboutMe';


function Home() {
  return (
    <div>
      <h1>Hello!</h1>
      <h2>Welcome to my portfolio</h2>
      <HomePageLinks pageName="My Work" /> <br />
      <HomePageLinks pageName="Contact Me" /><br />
      <HomePageLinks pageName="About Me" /><br />
      <HomePageLinks pageName="3 Words" /><br />
      <AboutMe image="https://photos.app.goo.gl/D8b2YJhQbUevLHhRA"/>

    </div>
  )
}

export default Home

