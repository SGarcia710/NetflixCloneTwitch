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
function SelectProfilePage(props) {
  return (
    <Container>
      <buttom onClick={() => props.history.push('/home')}>Ir al home</buttom>
    </Container>
  );
}

export default SelectProfilePage;
