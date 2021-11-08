import React from 'react';
import styled from 'styled-components';
import Input from '../Common/Input';

const Container = styled.div`
  width: 30vw;
  /* height: 100vh; */
`;

const Inputs = () => {
  return (
    <Container>
      {/* 현재 로그인된 동호희의 정보를 자동으로 불러와야함 */}
      <Input
        inputName="team2"
        inputType="text"
        inputContent="상대 동호회 이름"
        placeholder="동호회 이름을 입력하세요."
      />
      <Input inputName="date" inputType="date" inputContent="경기 날짜" />
      <Input
        inputName="place"
        inputType="text"
        inputContent="경기 장소"
        placeholder="경기 장소를 입력하세요."
      />
    </Container>
  );
};

export default Inputs;
