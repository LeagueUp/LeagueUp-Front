import React from 'react';
import styled from 'styled-components';
import colors from '../../Assets/Colors/Color';
import Inputs from './Inputs';

const Contents = styled.div`
  position: fixed;
  right: 0;
  width: 84%;
  height: 100%;
  padding-top: 20px;
  box-sizing: border-box;
  background-color: ${colors.background_grey};
`;

const LeagueAdd = () => {
  return (
    <Contents>
      <Inputs />
    </Contents>
  );
};

export default LeagueAdd;
