import React, { useState, useEffect } from "react";
import Carrousel from "../carrousel/Carrousel";
import { data } from "../../data/data";
import './Slider.css'

const Slider = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const Promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    Promesa.then((res) => setItems(res)).catch((err) => console.log(err));
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-title">
        <h2 data-text=' | Proyectos |'></h2>
      </div>
      
      <Carrousel item={items} />
    </div>
  );
};

export default Slider;
