import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

function LandingHeader({ showButton = true }) {
  return (
    <div className="LandingHeader">
      <img
        className="LandingHeader__logo"
        alt="Background image"
        src="/images/Netflix_Logo.png"
      />
      {showButton && (
        <Link to="/login">
          <div className="LandingHeader__button">
            <p>Iniciar sesión</p>
          </div>
        </Link>
      )}
    </div>
  );
}

export default LandingHeader;
