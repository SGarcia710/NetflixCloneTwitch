import React from 'react';
import './styles.scss';
import Header from '../Header';
import SignupInput from '../SingupInput';

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
        <SignupInput />
      </div>
    </div>
  );
}

export default Hero;
