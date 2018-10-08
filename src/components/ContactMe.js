import React from 'react'


function ContactMe() {
  return (
    <div className="component test3">
    <img src="/pink-watercolor.jpg" alt="watercolor-image" className="contact-me-watercolor-image" />
    <h2 className="contact-me-h2">Contact Me</h2>
      <div className='elements-container contact-me-container'>
      <div className='element contact-me-element'>
      <a className='contact-me-link' href='https://www.linkedin.com/in/paola-arredondo-acosta/'> <img className="link-logo" alt="linked-in-logo" src="/linkedin-gold.svg" /></a>

      </div>

      <div className='element contact-me-element'>
      <a className='contact-me-link' href='https://github.com/arredondop03'> <img className="link-logo" alt="linked-in-logo" src="/github-gold.svg" /> </a>
      </div>

      <div className='element contact-me-element'>
      <a className='contact-me-link' href='mailto:arredondop03@gmail.com'> <img className="link-logo" alt="linked-in-logo" src="/gmail-gold.svg" /> </a>
      </div>




      </div>
    </div>
  )
}

export default ContactMe