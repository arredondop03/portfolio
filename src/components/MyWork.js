import React from 'react'


function MyWork() {

  return(
    <div className="component" id="my-work">

    <h1 className="my-work-h1" >My Work</h1>


    <div className="elements-container">

      <a href="https://www.voi.com">
      <div className="element">
        <img className="image-my-work" src="/voi-logo.svg" />
        <h2>Voi.com</h2>
        {/* <p>This website was built to increase the sales of two products Voi offers: Reach and Detect. The page was first shown to the public at the American Society for Health Care Risk Management to hundreds of people. */}

{/* During this time, I was able to participate in a complete software development lifecycle through inception, implementation, and maintenance by working together with the product design and marketing teams.</p> */}
      </div>
      </a>
      
      <a href="https://github.com/arredondop03/Surf-Videos">
      <div className="element">
        <img className="image-my-work" src="/surf.jpg" />
        <h2>Surf Videos</h2>
        {/* <p>Using React.js, the YouTube API and the axios HTTP client, I created an application that would allow users to query and play various surfing videos.</p> */}

      </div>
      </a>

      <a href="https://boon-.herokuapp.com/">
      <div className="element">
        <img className="image-my-work" src="/gifts-pink.jpg" />
        <h2>Boon</h2>
        {/* <p>This game is based on my favorite Venezuelan comedian, George Harris. He starts the game with 20 points and every time he eats/hits an arepa (which are delicious by the way) he will lose points because they are not very diet friendly and he will gain points (not weight) when he drinks/ hits a Herbalife shake</p> */}
      </div>
      </a>


      <a href="https://arredondop03.github.io/George-vs-arepa/">
      <div className="element">
        <img className="image-my-work" src="/george.jpg" />
        <h2>George vs. Arepa</h2>
        {/* <p>An app where users create a profile with their clothing sizes so their friends and family can buy them gifts that fits them </p> */}
      </div>
      </a>


      


      

    </div>


    </div>


  )

}


export default MyWork

