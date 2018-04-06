import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/button.scss';

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
