import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="LandingHeader">
      <img className="LandingHeader__logo" src="/images/Netflix_Logo.png" />
      <Link to="/login">
        <div className="LandingHeader__button">
          <p>Iniciar sesión</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
