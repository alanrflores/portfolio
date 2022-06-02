import React from "react";
import './About.css'

 
const About = () => {
  const image = "alan.jpeg"

  return (
    <div className="about-container">
      <div className="about-description"> 
        <h3>Dejame decirte algo sobre mi</h3>
        <p>
         Hola!<br/>
         <br/>
         Me presento, mi nombre es Alan y tengo 29 años.<br/>
         Actualmente soy estudiante de Desarrollo Full-Stack en Coder house.<br/>
         Feliz de poder lograr este Portfolio y mis humildes proyectos.<br/>
         Soy una persona activa y responsable, le doy mucha dedicacion.<br/>
         Solo busco mi primer trabajo para seguir aprendiendo conocimiento,
         y seguir en este camino de la programacion.<br/>
         <br/>
         Saludos.
        </p>
        </div>
        <div className="about-imagen">
            <img 
            src={image} alt="about"
            />
        </div>
    </div>
  );
};

export default About;
