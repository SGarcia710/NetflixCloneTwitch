import React from 'react';
import styled from 'styled-components';
import Header from './axuliars/Header';

import { GrPlayFill } from 'react-icons/gr';
import { FiInfo } from 'react-icons/fi';
import { Slider } from '../../components';

const Container = styled.div`
  overflow-x: hidden;
  width: 100vw;
  min-height: 200vh;
  background-color: rgb(20, 20, 20);
  z-index: -1;
`;

const Hero = styled.div`
  width: 100%;
  height: 56.25vw;
  display: flex;
  flex-direction: column;
`;

const BGHero = styled.video`
  width: 100%;
  object-fit: cover;
  position: absolute;
  filter: brightness(0.6);
`;

const Logo = styled.img`
  z-index: 2;
  width: 25%;
`;
const Bold = styled.p`
  font-size: 1.6vw;
  transition: color 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  margin: 1vw 0;
  color: white;
`;
const Desc = styled.p`
  width: 35%;
  color: white;

  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  margin-top: 0.1vw;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 1.5vw;
`;
const Button = styled.div`
  padding: 0.8rem;
  padding-left: 2rem;
  padding-right: 2.4rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 20px;
  }
  transition: 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;
const PlayButton = styled(Button)`
  background-color: white;
  width: fit-content;
  color: black;
  margin-right: 34px;
`;
const InfoButton = styled(Button)`
  background-color: rgba(109, 109, 110, 0.7);
  width: fit-content;
  color: white;
`;
const HeroContent = styled.div`
  padding: 0 50px;
  padding-top: 16vh;
  flex: 1;
  position: relative;
`;

const BottomHeroOverlay = styled.div`
  align-self: flex-end;
  height: 20vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(20, 20, 20));
  z-index: 1;
`;

const HeroAge = styled.div`
  position: absolute;
  right: 0;
  border: solid 3px #dcdcdc;
  border-style: none none none solid;
  background-color: rgba(51, 51, 51, 0.6);
  font-size: 1.1vw;
  padding: 0.5vw 3.5vw 0.5vw 0.8vw;
  display: flex;
  align-items: center;
  height: 2.4vw;
  p {
    color: white;
    text-transform: uppercase;
    padding: 0 0.4em;
    unicode-bidi: normal;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
const Sliders = styled.div`
  z-index: 10;
  /* margin-top: -15vh; */
  width: 100%;
`;

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Hero>
        <BGHero loop autoPlay>
          <source src="/videos/HeroVideo.mp4" />
        </BGHero>
        <HeroContent>
          <Logo src="/images/LogoSerieHero.webp" />

          <Bold>Ve la temporada 1</Bold>

          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae velit molestias illum quaerat eveniet
          </Desc>
          <Buttons>
            <PlayButton>
              <GrPlayFill />
              <p>Reproducir</p>
            </PlayButton>
            <InfoButton>
              <FiInfo />
              <p>Más información</p>
            </InfoButton>
          </Buttons>
          <HeroAge>
            <p>16+</p>
          </HeroAge>
        </HeroContent>
        <BottomHeroOverlay />
      </Hero>
      <Sliders>
        <Slider
          title="Originales de Netflix"
          items={[
            {
              image: '/images/LargeItem1.webp',
              title: 'Zona de Riesgo',
              progress: 20,
            },
            {
              image: '/images/LargeItem2.webp',
              title: 'Descuida, yo te cuido',
              progress: 14,
            },
            {
              image: '/images/LargeItem3.webp',
              title: 'Tribus de Europa',
              progress: 100,
            },
            {
              image: '/images/LargeItem4.webp',
              title: 'Invasión en las alturas',
              progress: 92,
            },
            {
              image: '/images/LargeItem5.webp',
              title: 'Peaky Blinders',
              progress: 70,
            },
            {
              image: '/images/LargeItem6.webp',
              title: 'Barrenderos espaciales',
              progress: 43,
            },
          ]}
        />
      </Sliders>
    </Container>
  );
};

export default HomePage;
