import React from 'react';
import styled from 'styled-components';
// import colors from '../../Assets/Colors/Color';
import Button from '../Common/Button';
import Input from '../Common/Input';

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Inputs = () => {
  return (
    <>
      <InputDiv>
        <Input
          inputName="name"
          inputContent="이름"
          placeholder="이름을 입력하세요."
        />
        <Input
          inputName="id"
          inputContent="아이디"
          placeholder="아이디를 입력하세요."
        />
        <Input
          inputName="password1"
          inputContent="비밀번호"
          inputType="password"
          placeholder="비밀번호를 입력하세요."
        />
        <Input
          inputName="password2"
          inputContent="비밀번호 확인"
          inputType="password"
          placeholder="비밀번호를 한 번 더 입력하세요."
        />
        <Input
          inputName="clubName"
          inputContent="동호회 이름"
          placeholder="동호회 이름을 입력하세요."
        />
        <Input
          inputName="play"
          inputContent="종목"
          placeholder="종목을 입력하세요. 예) 탁구, 배구 ..."
        />
        <Input
          inputName="area"
          inputContent="활동지역"
          placeholder="활동 지역은 시,군 단위로 입력하세요. 예) 천안시, 서울시 .."
        />
      </InputDiv>
      <Button
        width="450px"
        content="회원가입"
        height="50px"
        // textColor="white"
        // backgroundColor={colors.main}
        // hoverTextColor={colors.main}
        // hoverBgColor="white"
      />
    </>
  );
};

export default Inputs;
