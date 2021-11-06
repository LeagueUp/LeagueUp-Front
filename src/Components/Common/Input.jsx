import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../Assets/Colors/Color';

const InputBox = styled.div`
  margin-bottom: 10px;

  & > span {
    font-size: 1.1rem;
    display: inline-block;
    width: 120px;
  }

  & > input {
    font-family: 'Pretendard Variable';
    font-size: 1rem;
    box-sizing: border-box;
    width: 320px;
    height: 35px;
    padding: 10px;
    border: 1px solid ${colors.main_grey};
  }

  & > input::placeholder {
    color: ${colors.main_black50};
    font-size: 0.9rem;
  }
`;

const Input = ({ inputContent, inputName, inputType, placeholder }) => {
  return (
    <InputBox>
      <span>{inputContent}</span>
      <input name={inputName} type={inputType} placeholder={placeholder} />
    </InputBox>
  );
};

Input.propTypes = {
  inputContent: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  inputType: 'text',
  placeholder: ' ',
};

export default Input;
