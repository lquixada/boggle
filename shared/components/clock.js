import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/clock.scss';

const Clock = ({secs, total}) => {
  const strokeDasharray = 251;
  const strokeDashoffset = ((secs / total) * strokeDasharray);
  const style = {strokeDashoffset, strokeDasharray};

  return (
    <div id="clock">
      <svg viewBox="0 0 100 100">
        <circle r="40" cx="50%" cy="50%" className="clock clock-gray" />
        <circle r="40" cx="50%" cy="50%" className="clock clock-green" style={style} transform="rotate(-90 50 50)" />
        <text x="50%" y="60%" className="counter" textAnchor="middle">
          {secs}
        </text>
      </svg>
      <span className="micro-counter">Time left: 00:{secs < 10 ? `0${secs}` : secs}</span>
    </div>
  );
};

Clock.propTypes = {
  secs: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Clock;
