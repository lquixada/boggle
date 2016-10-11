import React, {PropTypes} from 'react';
import '../../styles/clock.scss';

const Clock = ({secs, started}) => (
  <div id="clock">
    <svg width="120" height="120">
      <circle r="50" cx="60" cy="60" className="clock clock-gray" />
      <circle r="50" cx="60" cy="60" className={`clock clock-green ${started ? 'running' : ''}`} />
      <text x="60" y="70" className="counter" textAnchor="middle">
        {secs}
      </text>
    </svg>
    <span className="micro-counter">Time left: 00:{secs < 10 ? `0${secs}` : secs}</span>
  </div>
);

Clock.propTypes = {
  started: PropTypes.bool.isRequired,
  secs: PropTypes.number.isRequired
};

export default Clock;
