import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { ReactComponent as Logo } from '../../../Assets/Icons/Logo.svg';
import { ReactComponent as MessageIcon } from '../../../Assets/Icons/Message.svg';

const Container = styled.div`
  width: 100vw;
  height: 90px;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 3;
`;

const LogoDiv = styled.div`
  width: 18vw;
  text-align: center;
`;

const MessageDiv = styled.div`
  width: 10vw;
  text-align: center;
`;

const Header = () => {
  return (
    <Container>
      <LogoDiv>
        <Link to="/main">
          <Logo width="60" height="70" />
        </Link>
      </LogoDiv>
      <SearchBar />
      <MessageDiv>
        <MessageIcon width="50" height="50" />
      </MessageDiv>
    </Container>
  );
};

export default Header;
