import { Carousel } from "react-bootstrap";
import React from "react";
import "../slider/Slider.css";


const Carrousel = ({ item }) => {
 
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <div className="div-img">
        <img
          className="carousel-img"
          src={item ? item[0]?.src : ""}
          alt={item ? item[0]?.alt : ""}
        />
        </div>
        <Carousel.Caption className="carousel-description">
          
          <p className="carousel-p">{item ? item[0]?.description : ""}
          <a href="https://pokemon-app-pink-eight.vercel.app/" target="_blank" rel="noreferrer" >
            <button className="btn btn-outline-info border-0 m-2">Ir</button>
          </a></p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="div-img">
        <img
          className="carousel-img"
          src={item ? item[1]?.src : ""}
          alt={item ? item[1]?.alt : ""}
        />
      </div>
        <Carousel.Caption className="carousel-description">
          <p className="carousel-p">{item ? item[1]?.description : ""}
          <a href="https://www.socialsound.art/" target="_blank" rel="noreferrer" >
            <button className="btn btn-outline-info border-0 m-2">Ir</button>
          </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="div-img">
        <img
          className="carousel-img"
          src={item ? item[2]?.src : ""}
          alt={item ? item[2]?.alt : ""}
        />
      </div>
        <Carousel.Caption className="carousel-description">
          
          <p className="carousel-p">
         {item ? item[2]?.description : ""}
         <a href="https://games-ecommerce-coder-flores.netlify.app" target="_blank" rel="noreferrer" >
            <button className="btn btn-outline-info border-0 m-2 p-2">Ir</button>
          </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
