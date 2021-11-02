/* eslint-disable import/named */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../Assets/Colors/Color';

const Btn = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.textColor};
  background-color: ${props => props.backgroundColor};
  border-radius: 200px;
  border: none;
  font-size: 1.5rem;
  &:hover {
    transition: 0.5s;
    cursor: pointer;
    color: ${props => props.hoverTextColor};
    background-color: ${props => props.hoverBgColor};
  }
`;

const Button = ({
  width,
  height,
  textColor,
  backgroundColor,
  hoverTextColor,
  hoverBgColor,
  content,
  clickEvent,
}) => {
  return (
    <Btn
      width={width}
      height={height}
      textColor={textColor}
      backgroundColor={backgroundColor}
      hoverTextColor={hoverTextColor}
      hoverBgColor={hoverBgColor}
      onClick={clickEvent}
    >
      {content}
    </Btn>
  );
};

Button.propTypes = {
  // 너비 높이
  width: PropTypes.string,
  height: PropTypes.string,
  // 기본 text, bg color
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  // hover 시의 color
  hoverTextColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  // 버튼 이름과 클릭시 event
  content: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
};

Button.defaultProps = {
  width: '500px',
  height: '93px',
  textColor: colors.main,
  backgroundColor: 'white',
  hoverTextColor: 'white',
  hoverBgColor: colors.main,
};

export default Button;
