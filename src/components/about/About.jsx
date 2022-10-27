import React from "react";
import style from './about.module.css'

 
const About = () => {
  const image = "alan3.jpg"

  return (
   <div className={style.divBody}>    
    <div className={style.card}>
      <div className={style.lines}></div>
      <div className={style.imgBox}>
        <img src={image} alt="imagen-perfil" />
      </div>
      <div className={style.content}>
        <div className={style.details}> 
           <h2>Full Stack Developer</h2>
           <hr />
           <div className={style.data}>
            <h4>¡Hola!<br/>
            <span> 
            Comencé con la tecnología desde chico, ya que en la secundaria me enseñaban Ciencias de la Informática, 
            decidí seguir en la facultad pero en ese momento estaba muy aislado ya que me sentía solo, sin motivación,
            me dedique a otra cosa! <br /> 
            Hoy siento que vuelvo realmente a hacer lo que me gusta.<br/>
            Graduado de la carrera Full Stack Developer
            donde he redescubierto mi pasión por eso, y estoy muy emocionado de seguir por este camino...<br/>
            <br/>
            Gracias por llegar hasta aca!
            </span>
            </h4>
           </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
