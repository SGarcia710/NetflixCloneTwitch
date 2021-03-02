import React from 'react';
import Hero from './auxiliars/Hero';
import Divider from './auxiliars/Divider';
import './styles.scss';
import TVSection from './auxiliars/TVSection';

function LandingPage() {
  return (
    <div className="LandingPage">
      <Hero />
      <Divider />
      <TVSection />
      <Divider />
    </div>
  );
}

export default LandingPage;
