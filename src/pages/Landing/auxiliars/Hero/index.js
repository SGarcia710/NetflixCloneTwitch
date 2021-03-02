import React from 'react';
import './styles.scss';
import Header from '../Header';

function Hero() {
  return (
    <div className="LandingHero">
      <img className="LandingHero__bg" src="/images/home-bg.jpg" />
      <Header />
      <div className="LandingHero__content">
        <h1 className="LandingHero__content--title">
          Películas y series
          <br /> ilimitadas y mucho más.
        </h1>
        <h3 className="LandingHero__content--subtitle">
          Disfruta donde quieras. Cancela cuando quieras.
        </h3>
        <h6 className="LandingHero__content--text">
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
        </h6>

        <div className="EmailContainer">
          <input type="text" placeholder="Email" />
          <div className="Button">
            <p className="Button__text">Comenzar {'>'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
