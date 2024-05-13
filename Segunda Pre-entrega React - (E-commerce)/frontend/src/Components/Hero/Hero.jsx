import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import ItemListContainer from "../ItemListContainer/ItemListContainer.jsx";
import { BiSolidHandDown } from "react-icons/bi";



const Hero = ({ greeting }) => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <div>
            <ItemListContainer greeting={greeting} />
          </div>
          <p className="hero-inicio">revisa{" "}<BiSolidHandDown style={{fontSize: "50px"}} /></p>
          <p>nuestras</p>
          <p>colecciones</p>
        </div>
        <div className="hero-latest-btn">
          <div>Última Colección</div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
