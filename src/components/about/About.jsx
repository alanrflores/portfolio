import React from "react";
import style from "./about.module.css";

const About = () => {
  const image = "alan3.jpg";

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
              <h4>
                ¡Hola!
                <br />
                <span>
                  Mi objetivo es brindar, adquirir, compartir y desarrollar mis experiencias
                  para un mejor desempeño profesional. <br /> 
                  Obtener un empleo en el
                  que mi pensamiento innovador se pueda usar en conjunto para
                  ayudar a la organización a mejorar y acrecentar su visión y
                  misión.  <br />
                  Aplicar mis talentos y ofrecer los conocimientos que
                  poseo a nivel personal y profesional a la compañía que me
                  brinde la oportunidad, trabajando arduamente con integridad,
                  honestidad, compromiso, excelencia, y profesionalismo;
                  participando activa y efectivamente en las actividades que
                  promueven el éxito continuo.
                  <br />
                  <br />
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
