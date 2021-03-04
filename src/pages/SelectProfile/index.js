import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  h1 {
    font-size: 44px;
    color: red;
  }
`;
function SelectProfilePage() {
  return (
    <Container>
      <h1>HOLA SELECCIONA TU PERFIL</h1>
    </Container>
  );
}

export default SelectProfilePage;
