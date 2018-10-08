import React from 'react'


function ContactMe() {
  return (
    <div className="component test3">
    <h2 className="contact-me-h2">Contact Me</h2>
      <div className='elements-container contact-me-container'>
      <div className='element contact-me-element'>
      <a className='contact-me-link' href='https://www.linkedin.com/in/paola-arredondo-acosta/'> <img src="/linkedin-gold.svg" /> </a>
      </div>

      <div className='element contact-me-element'>
      <a className='contact-me-link' href='https://github.com/arredondop03'> Github </a>
      </div>

      <div className='element contact-me-element'>
      <a className='contact-me-link' href='mailto:arredondop03@gmail.com'> Email </a>
      </div>


      </div>
    </div>
  )
}

export default ContactMe