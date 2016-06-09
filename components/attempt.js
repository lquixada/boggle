import _ from 'underscore';
import React, { PropTypes } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

import Board from '../utils/board.js';
import Dictionary from '../utils/dictionary.js';


class Attempt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      minLength: 2
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.started) {
      this.clear();
    }
  }

  componentDidUpdate() {
    this.focus();
  }

  onEnter(evt) {
    if (this.state.value.length < this.state.minLength) {
      return;
    }

    if (evt.which === 13) {
      this.check();
    }
  }

  check() {
    const value = this.state.value.toUpperCase();

    if (!this.hasBeenAttempted(value) && this.isOnBoard(value)) {
      this.isValid(value, (isValid) => {
        this.props.addAttempt(value, isValid);
        this.reset();
      });
    } else {
      this.props.addAttempt(value, false);
      this.reset();
    }
  }

  hasBeenAttempted(value) {
    const found = _.findWhere(this.props.attempts, {word: value});
    return Boolean(found);
  }

  isOnBoard(value) {
    const board = new Board(this.props.matrix);
    return board.hasWord(value);
  }

  isValid(value, cb) {
    const dictionary = new Dictionary();
    return dictionary.check(value, cb);
  }

  updateValue(evt) {
    this.setValue(evt.target.value);
  }

  setValue(value) {
    this.setState({value: value.trim()});
  }

  reset() {
    this.clear();
    this.focus();
  }

  clear() {
    this.setValue('');
  }

  focus() {
    this.refs.attempt.focus();
  }

  render() {
    return (
      <div id="attempt">
        <input type="text" ref="attempt" value={this.state.value}
          onChange={this.updateValue.bind(this)}
          onKeyUp={this.onEnter.bind(this)}
          className="box"
          disabled={!this.props.started}
          placeholder={this.props.started? 'Type the word and hit Enter' : 'Press start to begin...'} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  attempts: state.attempts,
  matrix: state.matrix,
  started: state.started
});

export default connect(mapStateToProps, actions)(Attempt);
