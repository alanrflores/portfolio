import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='footer-info'>
    <h1>Your name</h1>
    <p>Argentina, Buenos Aires</p>
    <div className='footer-contact'>
    <h3>Contacto</h3>
    </div>
    <div className='footer-sns'>
    <div className='design-by'>
    Diseñado por Alan
    </div>
     <div className='sns-link'>
     <a href="https://www.linkedin.com/in/alan-flores-184406171/" target="_blank" rel="noreferrer"> 
        <i className='fab fa-linkedin linkedin'></i>
     </a>
     <a href="https://www.instagram.com/floresalanr/" target="_blank" rel="noreferrer" >
        <i className='fab fa-instagram instagram'></i>
     </a>
     <a href="https://www.instagram.com/floresalanr/" target="_blank" rel="noreferrer" >
        <i className='fab fa-facebook facebook'></i>
     </a>

     </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer
