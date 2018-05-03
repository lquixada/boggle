import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {flex} from '../helpers';

const Clock = ({secs, total}) => {
  const strokeDasharray = 251;
  const strokeDashoffset = ((secs / total) * strokeDasharray);
  const style = {strokeDashoffset, strokeDasharray};

  return (
    <Wrapper>
      <Svg viewBox="0 0 100 100">
        <Dial r="40" cx="50%" cy="50%" className="clock-gray" />
        <Dial r="40" cx="50%" cy="50%" className="clock-green" style={style} transform="rotate(-90 50 50)" />
        <Counter x="50%" y="60%" textAnchor="middle">
          {secs}
        </Counter>
      </Svg>
      <MicroCounter>Time left: 00:{secs < 10 ? `0${secs}` : secs}</MicroCounter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${flex(1)};
  margin-bottom: 2rem;

  @media (max-width: 540px) {
    ${flex('none')};
    margin-bottom: auto;
  }
`;

const Dial = styled.circle`
  fill: transparent;
  stroke-width: 15;

  &.clock-gray {
    stroke: #666;
  }

  &.clock-green {
    stroke: #6c6;
    stroke-dasharray: 251;
  }
`;

const Svg = styled.svg`
  width: 100%;
  height: auto;

  @media (max-width: 540px) {
    display: none !important;
  }
`;

const Counter = styled.text`
  fill: #fff;
  font-family: Arial, sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
`;

const MicroCounter = styled.span`
  display: none;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 540px) {
    display: block;
  }
`;

Clock.propTypes = {
  secs: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Clock;
