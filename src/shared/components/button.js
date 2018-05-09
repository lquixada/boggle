import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Button = ({onClick, text}) => (
  <Wrapper>
    <ButtonInput type="button" onClick={onClick}>{text}</ButtonInput>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-left: 2rem;
`;

const ButtonInput = styled.button`
  padding: 1rem;
  min-width: 10rem;
  border: 0;
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  line-height: normal;
  text-align: center;
  vertical-align: middle;
  border-radius: .4rem;
  background-color: #6c6;
  box-sizing: border-box;

  &:active {
    background-color: #286f23;
    -webkit-box-shadow: inset 0 .2rem .2rem rgba(0, 0, 0, .2);
    -moz-box-shadow: inset 0 .2rem .2rem rgba(0, 0, 0, .2);
    box-shadow: inset 0 .2rem .2rem rgba(0, 0, 0, .2);
  }
`;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
