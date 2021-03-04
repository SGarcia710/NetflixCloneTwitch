import React from 'react';
import Hero from './auxiliars/Hero';
import Divider from './auxiliars/Divider';
import './styles.scss';
import Section from './auxiliars/Section';
import QnA from './auxiliars/QnA';
import { Footer } from '../../components';

function LandingPage() {
  return (
    <div className="LandingPage">
      <Hero />
      <Divider />
      <Section
        image="/images/home-tv.jpg"
        imagePosition="right"
        title="Disfruta en TV."
        subtitle={
          <>
            Ve en smart TV, PlayStation, Xbox,
            <br /> Chromecast, Apple TV, reproductores de Blu-ray y más.
          </>
        }
      />
      <Divider />
      <Section
        image="/images/home-mobile.jpg"
        imagePosition="left"
        title={
          <>
            Descarga tus series
            <br />
            para verlas offline.
          </>
        }
        subtitle={
          <>
            Guarda tu contenido favorito y ten siempre
            <br /> algo para ver.
          </>
        }
      />
      <Divider />
      <Section
        image="/images/home-imac.jpg"
        imagePosition="right"
        title="Disfruta donde quieras."
        subtitle={
          <>
            Películas y series ilimitadas en tu teléfono,
            <br /> tablet, computadora y TV sin costo extra.
          </>
        }
      />
      <Divider />
      <QnA />
      <Divider />
      <Footer />
    </div>
  );
}

export default LandingPage;
