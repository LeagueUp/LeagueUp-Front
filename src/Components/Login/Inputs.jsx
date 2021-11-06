import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Common/Button';
import Input from '../Common/Input';

const InputDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  & input {
    font-family: inherit;
    font-size: 1.1rem;
    width: 280px;
    box-sizing: border-box;
    padding: 8px;
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
  & > button:nth-child(1) {
    margin-top: 15px;
  }
`;

const Inputs = () => {
  return (
    <>
      <InputDiv>
        <Input inputContent="아이디" placeholder="아이디를 입력하세요. " />
        <Input
          inputContent="비밀번호"
          inputType="password"
          placeholder="비밀번호를 입력하세요. "
        />
      </InputDiv>
      <StyledLink to="/">
        <Button width="400px" height="45px" content="로그인" />
      </StyledLink>
    </>
  );
};

export default Inputs;
