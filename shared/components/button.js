import '../../styles/button.scss';
import React, {PropTypes} from 'react';

const Button = ({onClick, text}) => (
  <div id="button">
    <button type="button" onClick={onClick}>{text}</button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
