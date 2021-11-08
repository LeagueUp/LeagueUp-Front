import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from '../../../Assets/Colors/Color';
import Button from '../Button';

const Container = styled.div`
  position: fixed;
  display: flex;
  height: 83%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LinkContainer = styled.div`
  left: 0;
  width: 200px;
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
      <LinkContainer>
        <StyledNavLink to="/main" activeClassName="selected">
          <div>전국 리그</div>
        </StyledNavLink>
        <StyledNavLink to="/leagueAdd" activeClassName="selected">
          <div>리그 등록</div>
        </StyledNavLink>
        <StyledNavLink to="/my" activeClassName="selected">
          <div>내 정보</div>
        </StyledNavLink>
      </LinkContainer>
      <Button width="180px" height="40px" content="로그아웃" />
    </Container>
  );
};

export default SideBar;
