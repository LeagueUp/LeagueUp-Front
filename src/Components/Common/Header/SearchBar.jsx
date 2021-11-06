/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { testApi } from '../../../api/Test';
import colors from '../../../Assets/Colors/Color';
import { ReactComponent as Search } from '../../../Assets/Icons/Search.svg';
import SearchResult from './SearchResult';

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
    font-family: inherit;
  }

  & input::placeholder {
    font-family: inherit;
    color: ${colors.main_grey};
  }

  & input:focus {
    outline: none;
  }
`;

const SearchBar = () => {
  // input data
  const [inputValue, setinputValue] = useState('');
  // result box visible
  const [visible, setvisible] = useState(false);

  // 전체 리스트
  const [itemList, setitemList] = useState([]);

  // 서치 결과값
  const [searchResult, setsearchResult] = useState([]);

  // api 통신
  const fetch = async () => {
    // api 에서 불러온 전체 리스트를 data 에저장
    try {
      const { data } = await testApi();
      setitemList(data);
    } catch (error) {
      console.error(error);
    }
    return itemList;
  };

  const search = event => {
    setinputValue(event.target.value);
    // 키가 눌릴 때마다 api 에서 리스트를 가져오는 fetch 함수 실행
    fetch();
    // input에 입력할 경우에는 input 에 맞는 data 를 리턴
    // console.log(Object.values(itemList));
    if (inputValue) {
      // for (let i = 0; i < itemList.length; i += 1) {
      //   const { name } = itemList[i];
      //   // 해당 이름에 input 에 입력된 값이 있으면 name 출력
      //   if (name.indexOf(inputValue) !== -1) {
      //     console.log({ name });
      //   } else {
      //     console.log('없는데요');
      //   }
      // }
      setsearchResult(itemList);
      console.log(searchResult);
    } else {
      // input 에 아무것도 없을 경우에는 전체 data 를 리턴
      setsearchResult(itemList);
    }
  };
  // focus 시 보이게
  const display = () => {
    setvisible(true);
  };

  // unfocus 시 안 보이게
  const unDisplay = () => {
    setvisible(false);
  };
  return (
    <Container>
      <Search width="25" height="25" />
      <input
        placeholder="검색어를 입력해주세요."
        onChange={search}
        onFocus={display}
        onBlur={unDisplay}
      />
      <SearchResult display={visible} data={searchResult} />
    </Container>
  );
};

export default SearchBar;
