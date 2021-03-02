import React from 'react';
import './styles.scss';

function TVSection() {
  return (
    <div className="TVSection">
      <div>
        <h1 className="TVSection__title">Disfruta en TV.</h1>
        <p className="TVSection__text">
          Ve en smart TV, PlayStation, Xbox, <br />
          Chromecast, Apple TV, reproductores de Blu-ray y más.
        </p>
      </div>
      <img
        className="TVSection__image"
        src="/images/home-tv.jpg"
        alt=""
        srcset=""
      />
    </div>
  );
}

export default TVSection;
