import React from "react";
import "./Hero.scss";
import hero from "../../assets/hero.png";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>Проектирование и установка систем видеонаблюдения</h1>
            <p>Защитите свой бизнес от неожиданных сбоев!</p>
            <button>Узнать больше</button>
          </div>
          <div className="hero-img">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
