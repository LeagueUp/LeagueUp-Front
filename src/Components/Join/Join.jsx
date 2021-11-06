import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../Assets/Icons/LongLogo.svg';
import Inputs from './Inputs';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: 0 auto;
`;

const Join = () => {
  return (
    <Container>
      <Logo width="250" height="150" />
      <Inputs />
    </Container>
  );
};

export default Join;
