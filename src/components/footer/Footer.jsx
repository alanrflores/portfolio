import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>Argentina, Buenos Aires | Córdoba </p>
      </div>
      <div className="footer-contact">
        <h3>Contacto | <span>+541123517231</span> </h3>
      </div>
      
      <div className="footer-sns">
        <div className="sns-link">
          <a
            href="https://www.linkedin.com/in/alan-flores-184406171/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/floresalanr/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram instagram"></i>
          </a>
          <a
            href="https://github.com/alanrflores"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
