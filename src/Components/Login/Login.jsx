import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo2 } from '../../Assets/Icons/LongLogo.svg';
import Inputs from './Inputs';
import colors from '../../Assets/Colors/Color';

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const JoinText = styled.p`
  font-size: 0.9rem;
  line-height: 50px;
  color: ${colors.main_black};
  &:hover {
    transition: 0.2s;
    color: ${colors.main};
  }
`;

const StyledLink = styled(Link)`
  &:visited {
    color: black;
    text-decoration: none;
  }
  &:link {
    color: black;
    text-decoration: none;
  }
`;
const Login = () => {
  return (
    <Container>
      {/* <Logo width="150" height="160" /> */}
      <Logo2 width="250" height="130" />
      <Inputs />
      <StyledLink to="/join">
        <JoinText>혹시 리그업이 처음이신가요?</JoinText>
      </StyledLink>
    </Container>
  );
};

export default Login;
