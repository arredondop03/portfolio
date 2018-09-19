import React from 'react'
import  '../App.css'
import HomePageLinks from './HomePageLinks'
import AboutMe from './AboutMe';


function Home() {
  return (
    <div>
      <div className="background-stripe-yellow" />
      <h1>Hello!</h1>
      <h2>Welcome to my portfolio</h2>
      <HomePageLinks pageName="My Work" /> <br />
      <HomePageLinks pageName="Contact Me" /><br />
      <HomePageLinks pageName="About Me" /><br />
      <HomePageLinks pageName="3 Words" /><br />
      {/* <AboutMe /> */}

    </div>
  )
}

export default Home

