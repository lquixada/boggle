import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/input.scss';

class Input extends React.Component {
  componentDidUpdate() {
    if (this.props.started) {
      this.focus();
    }
  }

  focus() {
    this.refs.word.focus();
  }

  render() {
    return (
      <div id="input">
        <input type="text"
          ref="word"
          value={this.props.value}
          onChange={(evt) => this.props.onChange(evt)}
          onKeyUp={(evt) => this.props.onEnter(evt)}
          className="box"
          disabled={!this.props.started}
          placeholder={this.props.started ? 'Type the word and hit Enter!' : 'Press start to begin...'} />
      </div>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  started: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
};

export default Input;
