import React from 'react';
import Button from '../Components/Common/Button';

const TestPage = () => {
  const test = () => {
    console.log('눌렀당.');
  };
  return <Button content="로그인" clickEvent={test} />;
};

export default TestPage;
