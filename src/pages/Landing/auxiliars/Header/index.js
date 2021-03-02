import React from 'react';
import './styles.scss';

function Header() {
  return (
    <div className="LandingHeader">
      <img className="LandingHeader__logo" src="/images/Netflix_Logo.png" />
      <div className="LandingHeader__button">
        <p>Iniciar sesión</p>
      </div>
    </div>
  );
}

export default Header;
