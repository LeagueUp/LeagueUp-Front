/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 73vw;
  min-height: 50%;
  position: fixed;
  box-sizing: border-box;
  z-index: 5;
  top: 12vh;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px; */
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

const Items = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 300px;
  height: 100px;
`;

const SearchResult = ({ display, data }) => {
  return (
    <Container visible={display} data={data}>
      <p>검색 결과 총 10개</p>
      {/* {data === [] ? (
        <p>검색 결과가 없습니다. </p>
      ) : (
        <Items>
          {data.map(item => (
            <Item>
              <p>{item.website}</p>
              <p>{item.name}</p>
            </Item>
          ))}
        </Items>
      )} */}
    </Container>
  );
};

SearchResult.propTypes = {
  display: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
};

export default SearchResult;
