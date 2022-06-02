import { Carousel } from "react-bootstrap";
import React from "react";
import "../slider/Slider.css";


const Carrousel = ({ item }) => {
 
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img
          className="carousel-img"
          src={item ? item[0]?.src : ""}
          alt={item ? item[0]?.alt : ""}
        />
        <Carousel.Caption className="carousel-description">
          
          <p className="carousel-p">{item ? item[0]?.description : ""}
          <a href="https://games-ecommerce-coder-flores.netlify.app" target="_blank" rel="noreferrer" >
            <button className="btn btn-outline-info border-0 m-2">Ir</button>
          </a></p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src={item ? item[1]?.src : ""}
          alt={item ? item[1]?.alt : ""}
        />

        <Carousel.Caption className="carousel-description">
          <p className="carousel-p">{item ? item[1]?.description : ""}
          <a href="https://app-rick-and-morty-react2.netlify.app" target="_blank" rel="noreferrer" >
            <button className="btn btn-outline-info border-0 m-2">Ir</button>
          </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src={item ? item[2]?.src : ""}
          alt={item ? item[2]?.alt : ""}
        />

        <Carousel.Caption className="carousel-description">
          
          <p className="carousel-p">
         {item ? item[2]?.description : ""}
         <a href="https://pokeapi-react-coder.netlify.app" target="_blank" rel="noreferrer" >
            <button className="btn btn-outline-info border-0 m-2">Ir</button>
          </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
