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
          
          <p className="carousel-p">{item ? item[0]?.description : ""}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src={item ? item[2]?.src : ""}
          alt={item ? item[2]?.alt : ""}
        />

        <Carousel.Caption className="carousel-description">
          
          <p className="carousel-p">{item ? item[2]?.description : ""}</p>
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
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
