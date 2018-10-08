import React from 'react'


function AboutMe() {

  return(
    <div className="about-me-div component">


    
    <div className="left-content" >

      <video className="about-me-video" autoPlay loop>
        <source src="about-me.mov" type="video/mp4" />
      Your browser does not support the video tag.
      </video>



    </div>



    <div className="right-content">
     <h1>Who is this jaw-dropping girl?</h1>
      <br />
      <p>  I am a 19 years old Venezuelan girl who just graduated from a web 
        development bootcamp called Ironhack. I am currently working as a contractor 
        for Voi doing their landing page (coming soon int the projects page) with Webflow. 
        Since I am the only one in the team who had to work with Webflow I had to learn it 
        on my own (and my best friend Google) and I am currently learning Reactjs, 
        which proves that I can achieve any challenge you can throw at me. If you still have doubts, 
        remember, I graduated from a nine weeks bootcamp (you will only know the pain I 
        am talking about if you have experienced it yourself).  This is my passion and I am 
        extremely grateful I found it while being so young.  Keep reading and if you like what 
        you see or have any questions email me at arredondop03@gmail.com. Thank you! Enjoy! 😁
      </p>
      </div>
    </div>


  )

}


export default AboutMe

