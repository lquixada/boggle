import React, {PropTypes} from 'react';
import '../../styles/clock.scss';

const Clock = ({secs, total}) => {
  const strokeDashoffset = ((secs / total) * 315);

  return (
    <div id="clock">
      <svg width="120" height="120">
        <circle r="50" cx="60" cy="60" className="clock clock-gray" />
        <circle r="50" cx="60" cy="60" className="clock clock-green" style={{strokeDashoffset}} transform="rotate(-90 60 60)" />
        <text x="60" y="70" className="counter" textAnchor="middle">
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
