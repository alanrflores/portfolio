import React from "react";
import './About.css'
 
const About = () => {
 

  return (
    <div className="about-container">
      <div className="about-description"> 
        <h3>Dejame decirte algo sobre mi</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis
          blandit risus. Quisque dui orci, interdum id elementum non, sodales
          eget elit. Sed vestibulum ex id fringilla interdum. Suspendisse
          posuere magna non lorem gravida, et pellentesque tortor egestas. Duis
          aliquet consectetur enim mollis semper. 
        </p>
        </div>
        <div className="about-imagen">
            <img 
            src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" alt="about"
            />
        </div>
    </div>
  );
};

export default About;
