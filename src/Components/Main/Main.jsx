import React from 'react';
import styled from 'styled-components';
import colors from '../../Assets/Colors/Color';

const Contents = styled.div`
  position: fixed;
  right: 0;
  width: 84%;
  height: 100%;
  padding-top: 20px;
  box-sizing: border-box;
  background-color: ${colors.background_grey};
`;

const Main = () => {
  return <Contents>전국리그</Contents>;
};

export default Main;
