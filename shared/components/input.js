import '../../styles/input.scss';
import React, {PropTypes} from 'react';

const Input = ({value, started, onChange, onEnter}) => (
  <div id="input">
    <input type="text"
      value={value}
      onChange={evt => onChange(evt)}
      onKeyUp={evt => onEnter(evt)}
      className="box"
      disabled={!started}
      placeholder={started? 'Type the word and hit Enter!' : 'Press start to begin...'} />
  </div>
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  started: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
};

export default Input;
