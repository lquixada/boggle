/*
 * Score
 */

define([
  'react',
  'underscore',
  'text!app/score/style.css'
], function (React, _, css) {
  'use strict';

  var ScoreView = React.createClass({
    getInitialState: function () {
      return {
        counter: 0,
        attempts: []
      };
    },

    add: function (attempt) {
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
    },

    check: function (word) {
      var found = _.findWhere(this.state.attempts, {word: word});
      return !Boolean(found);
    },

    getItems: function () {
      return this.state.attempts.map(function (attempt) {
        return (
          <tr>
            <td>{attempt.word}</td>
            <td>{attempt.score}</td>
          </tr>
        );
      });
    },

    render: function () {
      return (
        <div>
          <style type="text/css">{css}</style>
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
  });

  return ScoreView;
});
