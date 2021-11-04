import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from '../../../Assets/Colors/Color';

const Container = styled.div`
  position: fixed;
  left: 0;
  width: 200px;
  height: 100%;
  font-weight: 400;
  font-size: 1.2rem;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:visited {
    color: black;
    text-decoration: none;
  }
  &:link {
    color: black;
    text-decoration: none;
  }
  &.selected {
    div {
      border-left: 12px solid ${colors.main};
      padding-right: 12px;
      box-sizing: border-box;
    }
  }
`;

const SideBar = () => {
  return (
    <Container>
      <StyledNavLink to="/leagueAdd" activeClassName="selected">
        <div>리그 등록</div>
      </StyledNavLink>
      <StyledNavLink to="/my" activeClassName="selected">
        <div>내 정보</div>
      </StyledNavLink>
    </Container>
  );
};

export default SideBar;
