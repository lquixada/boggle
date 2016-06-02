/*
 * Score
 */
import _ from 'underscore';
import $ from 'jquery';
import React from 'react';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      attempts: []
    };
  }

  add(attempt) {
    var attempts = this.state.attempts;
    var counter = this.state.counter;

    if (attempt.scored) {
      counter += attempt.word.length;
    }

    attempts = attempts.concat([{
      word: attempt.word,
      score: (attempt.scored ? attempt.word.length : '✘')
    }]);

    this.setState({
      counter: counter,
      attempts: attempts
    })
  }

  check(word) {
    var found = _.findWhere(this.state.attempts, {word: word});
    return !Boolean(found);
  }

  getItems() {
    return this.state.attempts.map(function (attempt, i) {
      return (
        <tr key={i}>
          <td>{attempt.word}</td>
          <td>{attempt.score}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div id="score">
        <header>
          <h2>Score: {this.state.counter}</h2>
        </header>
        <section className="box">
          <table>
            <tbody>
              {this.getItems()}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}
