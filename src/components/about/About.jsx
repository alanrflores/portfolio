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
         Actualmente soy estudiante de Desarrollo Full-Stack.<br/>
         Feliz de poder lograr este Portfolio y mis humildes proyectos.<br/>
         Soy una persona activa y responsable, le doy mucha dedicacion.<br/>
         Me presento como una persona activa,responsable,orientada al logro de resultados y a la resolución y evolución constante en las tareas asignadas.<br/> 
         Cuento con gran capacidad trabajando en equipo, me adapto fácilmente a nuevas herramientas y métodos de trabajo.<br/>
         Mi objetivo es trabajar e introducirme en el área de la programación para ampliar mis conocimientos..<br/>
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
