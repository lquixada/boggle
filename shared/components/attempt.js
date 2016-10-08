import '../../styles/attempt.scss';
import React, {PropTypes} from 'react';

const Attempt = ({value, started, onChange, onEnter}) => (
  <div id="attempt">
    <input type="text"
      value={value}
      onChange={evt => onChange(evt)}
      onKeyUp={evt => onEnter(evt)}
      className="box"
      disabled={!started}
      placeholder={started? 'Type the word and hit Enter!' : 'Press start to begin...'} />
  </div>
);

Attempt.propTypes = {
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  started: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
};

export default Attempt;
