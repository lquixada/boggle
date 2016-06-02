/*
 * Main
 */

import React, { PropTypes } from 'react';

import _ from 'underscore';
import $ from 'jquery';

import Dictionary from '../utils/dictionary';
import { addAttempt, incrementCounter } from '../actions';
import { connect } from 'react-redux';

import Attempt from './attempt';
import Board from './board';
import Button from './button';
import Clock from './clock';
import Score from './score';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionary: new Dictionary(),
      minLength: 2
    };
  }

  check(evt) {
    var word = evt.target.value.toUpperCase();

    if (word.length < this.state.minLength) {
      return;
    }

    if (this.checkScore(word) && this.checkBoard(word)) {
      this.checkDictionary(word, (isValid) => {
        this.props.commit(word, isValid);
        this.resetAttempt();
      });
    } else {
      this.props.commit(word, false);
      this.resetAttempt();
    }
  }

  checkBoard(word) {
    return this.refs.board.check(word);
  }

  checkDictionary(word, cb) {
    return this.state.dictionary.check(word, cb);
  }

  checkScore(word) {
    var found = _.findWhere(this.props.attempts, {word: word});
    return !Boolean(found);
  }

  resetAttempt() {
    this.refs.attempt.clear();
    this.refs.attempt.focus();
  }

  render() {
    return (
      <main>
        <header>
          <div className="container">
            <h1>BOGGLE</h1>
            <Button ref="button" />
            <Attempt ref="attempt" onEnter={this.check.bind(this)} />
          </div>
        </header>

        <section>
          <div className="container">
            <aside>
              <Clock ref="clock" />
              <Score ref="score" />
            </aside>
            <Board ref="board" />
          </div>
        </section>

        <footer>
          <div className="container">
            &copy; Copyright 2016 Leonardo Quixadá. All rights reserved. <a href="https://github.com/lquixada/boggle">Github</a>
          </div>
        </footer>
      </main>
    );
  }
}

Main.propTypes = {
  attempts: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired
  }).isRequired).isRequired
};

const mapStateToProps = (state) => ({
  attempts: state.attempts
});

const mapDispatchToProps = (dispatch) => ({
  commit(word, scored) {
    dispatch(addAttempt(word, scored));

    if (scored) {
      dispatch(incrementCounter());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
