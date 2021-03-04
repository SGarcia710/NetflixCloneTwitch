import React from 'react';
import styled from 'styled-components';
import { ImEarth } from 'react-icons/im';

const WidthContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`;
const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;
`;
const Title = styled.p`
  color: #757575;
  margin-bottom: 25px;
`;
const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 24px;
`;
const Link = styled.a`
  color: #757575;
  max-width: 1000px;
  cursor: pointer;
  font-size: 12px;
  margin-bottom: 16px;
  &:hover {
    text-decoration: underline;
  }
`;
const LanguageContainer = styled.div`
  color: #757575;
  display: flex;
  align-items: center;
  background-color: #000;
  border: 1px solid #333;
  width: fit-content;
  padding: 12px 10px;
`;

const LanguageSelector = styled.select`
  margin-left: 14px;
  background-color: transparent;
  border: none;
  color: #757575;
  outline: none;
`;

const DATA = [
  'Preguntas frecuentes',
  'Centro de ayuda',
  'Términos de uso',
  'Privacidad',
  'Preferencias de cookies',
  'Información corporativa',
];

function Footer() {
  return (
    <WidthContainer>
      <Container>
        <Title>¿Preguntas? Llama al 01 800 917 1564</Title>
        <Links>
          {React.Children.toArray(DATA.map((link) => <Link>{link}</Link>))}
        </Links>

        <LanguageContainer>
          <ImEarth />
          <LanguageSelector name="select">
            <option value="value1" selected>
              Español
            </option>
            <option value="value2">Inglés</option>
            <option value="value3">Alemán</option>
          </LanguageSelector>
        </LanguageContainer>
      </Container>
    </WidthContainer>
  );
}

export default Footer;
