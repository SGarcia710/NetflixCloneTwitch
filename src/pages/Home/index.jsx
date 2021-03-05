import React from 'react';
import styled from 'styled-components';
import Header from './axuliars/Header';

import { GrPlayFill } from 'react-icons/gr';
import { FiInfo } from 'react-icons/fi';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Hero = styled.div`
  width: 100%;
  height: 56.25vw;
  position: absolute;
  top: 0;
`;

const BGHero = styled.video`
  z-index: -1;
  width: 100%;
  object-fit: cover;
  position: absolute;
  filter: brightness(0.6);
`;

const Logo = styled.img`
  z-index: 2;
`;

const Bold = styled.p``;
const Desc = styled.p``;
const Button = styled.div`
  padding: 0.8rem;
  padding-left: 2rem;
  padding-right: 2.4rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 20px;
  }
`;
const PlayButton = styled(Button)`
  background-color: white;
  width: fit-content;
  color: black;
`;
const InfoButton = styled(Button)`
  background-color: rgba(109, 109, 110, 0.7);
  width: fit-content;
  color: white;
`;

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Hero>
        <BGHero loop autoPlay>
          <source src="/videos/HeroVideo.mp4" />
        </BGHero>
        <Logo src="/images/LogoSerieHero.webp" />

        <Bold>Ve la temporada 1</Bold>

        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          velit molestias illum quaerat eveniet
        </Desc>

        <PlayButton>
          <GrPlayFill />
          <p>Reproducir</p>
        </PlayButton>
        <InfoButton>
          <FiInfo />
          <p>Más información</p>
        </InfoButton>
      </Hero>
    </Container>
  );
};

export default HomePage;
