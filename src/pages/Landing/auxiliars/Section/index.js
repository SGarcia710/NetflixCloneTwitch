import React from 'react';
import './styles.scss';

function LandingSection(props) {
  return (
    <div className="LandingSection">
      {props.imagePosition === 'left' && (
        <img
          className="LandingSection__image"
          src={props.image}
          alt={props.title}
        />
      )}
      <div>
        <h1 className="LandingSection__title">{props.title}</h1>
        <p className="LandingSection__text">{props.subtitle}</p>
      </div>
      {props.imagePosition === 'right' && (
        <img
          className="LandingSection__image"
          src={props.image}
          alt={props.title}
        />
      )}
    </div>
  );
}

export default LandingSection;
