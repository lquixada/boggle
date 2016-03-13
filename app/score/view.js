/*
 * Score
 */

define(['react', 'underscore'], function (React, _) {
  'use strict';

  var ScoreView = React.createClass({
    displayName: 'ScoreView',

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
        score: attempt.scored ? attempt.word.length : '✘'
      }]);

      this.setState({
        counter: counter,
        attempts: attempts
      });
    },

    check: function (word) {
      var found = _.findWhere(this.state.attempts, { word: word });
      return !Boolean(found);
    },

    getItems: function () {
      return this.state.attempts.map(function (attempt) {
        return React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            null,
            attempt.word
          ),
          React.createElement(
            'td',
            null,
            attempt.score
          )
        );
      });
    },

    render: function () {
      return React.createElement(
        'div',
        { id: 'score' },
        React.createElement(
          'header',
          null,
          React.createElement(
            'h2',
            null,
            'Score: ',
            this.state.counter
          )
        ),
        React.createElement(
          'section',
          { className: 'box' },
          React.createElement(
            'table',
            null,
            React.createElement(
              'tbody',
              null,
              this.getItems()
            )
          )
        )
      );
    }
  });

  return ScoreView;
});
