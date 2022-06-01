import React from 'react'
import './Navbar.css'

const Navbar = ({isScrolling}) => {

  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
//si nuestro scroll cambia o baja un poco le agregamos la clase "scrolling",si no null  
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
    <div className="navbar-logo" onClick={toTheTop}>
      Alan 
    </div>
  </nav>
  )
}

export default Navbar