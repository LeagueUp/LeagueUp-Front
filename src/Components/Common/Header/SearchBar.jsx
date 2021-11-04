import React from 'react';
import styled from 'styled-components';
import colors from '../../../Assets/Colors/Color';
import { ReactComponent as Search } from '../../../Assets/Icons/Search.svg';

const Container = styled.div`
  width: 75vw;
  height: 50px;
  padding: 5px 15px;
  box-sizing: border-box;
  border-radius: 50px;
  display: flex;
  align-items: center;
  background-color: ${colors.background_grey2};

  & input {
    width: 900px;
    border: none;
    background-color: inherit;
    display: block;
    padding: 10px;
    font-size: 1.1rem;
  }

  & input::placeholder {
    color: ${colors.main_grey};
  }

  & input:focus {
    outline: none;
    border-bottom: red;
  }
`;

const SearchBar = () => {
  return (
    <Container>
      <Search width="25" height="25" />
      <input placeholder="검색어를 입력해주세요." />
    </Container>
  );
};

export default SearchBar;
