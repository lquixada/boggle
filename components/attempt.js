/*
 * Attempt
 */
import _ from 'underscore';
import React, { PropTypes } from 'react';
import { addAttempt, incrementCounter } from '../actions';
import { connect } from 'react-redux';

import Board from '../utils/board.js'
import Dictionary from '../utils/dictionary.js'

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

    if (!this.hasBeenAttempted() && this.isOnBoard()) {
      this.isValid((isValid) => {
        this.props.commit(value, isValid);
        this.reset();
      });
    } else {
      this.props.commit(value, false);
      this.reset();
    }
  }

  hasBeenAttempted() {
    const value = this.state.value.toUpperCase();
    const found = _.findWhere(this.props.attempts, {word: value});
    return Boolean(found);
  }

  isOnBoard() {
    const value = this.state.value.toUpperCase();
    const board = new Board(this.props.matrix);
    return board.hasWord(value);
  }

  isValid(cb) {
    const value = this.state.value.toUpperCase();
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

Attempt.propTypes = {
  attempts: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.any.isRequired,
    word: PropTypes.string.isRequired
  }).isRequired).isRequired,
  matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  started: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  attempts: state.attempts,
  matrix: state.matrix,
  started: state.started
});

const mapDispatchToProps = (dispatch) => ({
  commit(word, scored) {
    dispatch(addAttempt(word, scored));

    if (scored) {
      dispatch(incrementCounter());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Attempt);
