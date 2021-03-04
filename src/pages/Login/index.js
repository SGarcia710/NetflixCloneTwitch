import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Footer, LandingHeader } from '../../components';

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  position: relative;
`;
const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  filter: brightness(0.6);
`;
const Form = styled.form`
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 60px 68px 40px;
  margin: 0 auto;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  min-height: 660px;
  max-width: 450px;
`;
const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 66px;
`;
const Input = styled.input`
  background-color: #333333;
  padding: 0 16px;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  margin-top: ${(props) => (props.hasMargin === true ? '32px' : '0')};
  height: 50px;
  border-bottom: ${(props) =>
    props.error === true ? '2px solid #e87c03' : 'none'};

  &::placeholder {
    color: #8c8c8c;
  }
`;
const ErrorMessage = styled.p`
  color: #e87c03;
  font-size: 12px;
  margin-top: 5px;
`;
const Button = styled.input`
  background-color: #e52c12;
  width: 100%;
  color: white;
  border: none;
  font-size: 16px;
  padding: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 40px;
  margin-bottom: 8px;
`;

const LoginOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const OptionText = styled.p`
  color: #b3b3b3;
  font-size: 13px;
`;
const OptionLink = styled(OptionText)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    margin-left: 6px;
  }
`;
function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    if (email === '') {
      setEmailError(true);
    }
    if (password === '') {
      setPasswordError(true);
    }
    if (email !== '' && password !== '') props.history.push('/select-profile');
  };

  useEffect(() => {
    if (email !== '' && emailError === true) {
      setEmailError(false);
    }
    if (password !== '' && passwordError === true) {
      setPasswordError(false);
    }
  }, [email, password]);

  return (
    <Container>
      <Background src="/images/home-bg.jpg" alt="Background image" />
      <LandingHeader showButton={false} />
      <Form onSubmit={submitForm}>
        <Title>Inicia sesión</Title>
        <Input
          type="email"
          error={emailError}
          placeholder="Email o número de teléfono"
          onChange={(event) => setEmail(event.target.value)}
        />
        {emailError && (
          <ErrorMessage>
            Ingresa un email o un número de teléfono válido.
          </ErrorMessage>
        )}
        <Input
          type="password"
          hasMargin
          error={passwordError}
          placeholder="Contraseña"
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError && (
          <ErrorMessage>
            La contraseña debe tener entre 4 y 60 caracteres.
          </ErrorMessage>
        )}
        <Button type="submit" value="Iniciar sesión" />
        <LoginOptions>
          <Checkbox>
            <input type="checkbox" />
            <OptionText>Recuerdame</OptionText>
          </Checkbox>
          <OptionLink>¿Necesitas ayuda?</OptionLink>
        </LoginOptions>
      </Form>

      <Footer />
    </Container>
  );
}

export default LoginPage;
