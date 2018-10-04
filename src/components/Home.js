import React from 'react'
import  '../App.css'
import Hero from './Hero';
import AboutMe from './AboutMe';
import MyWork from './MyWork'
import ContactMe from './ContactMe'


function Home() {
  return (
    <div>
     <Hero />  
     <AboutMe />
     <MyWork />
     <ContactMe />
    </div>
  )
}

export default Home

