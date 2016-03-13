/*
 * App
 */

define(['react', 'react-dom', 'app/attempt/view', 'app/board/view', 'app/control/view', 'app/score/view', 'app/timer/view', 'text!app/main/style.css'], function (React, ReactDOM, AttemptView, BoardView, ControlView, ScoreView, TimerView, css) {
  'use strict';

  var App = React.createClass({
    displayName: 'App',

    getInitialState: function () {
      return {
        minLength: 2,
        started: false
      };
    },

    checkOnEnter: function (e) {
      if (e.which === 13) {
        this.check(e.target.value.toUpperCase());
      }
    },

    check: function (word) {
      var that = this;

      if (word.length < this.state.minLength) {
        return;
      }

      if (this.checkScore(word) && this.checkBoard(word)) {
        this.checkDictionary(word, function (isValid) {
          that.commit(word, isValid);
        });
      } else {
        this.commit(word, false);
      }
    },

    checkBoard: function (word) {
      return this.board.check(word);
    },

    checkDictionary: function (word, cb) {
      return this.dictionary.check(word, cb);
    },

    checkScore: function (word, cb) {
      return this.score.check(word);
    },

    commit: function (word, scored) {
      this.score.add({
        word: word,
        scored: scored
      });

      this.attempt.clear();
      this.attempt.focus();
    },

    toggle: function () {
      this.setState({ started: !this.state.started });
    },

    reset: function () {
      this.setState({ started: false });
    },

    render: function () {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'style',
          { type: 'text/css' },
          css
        ),
        React.createElement(
          'main',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { className: 'container' },
              React.createElement(
                'h1',
                null,
                'BOGGLE'
              ),
              React.createElement(ControlView, { started: this.state.started, onClick: this.toggle }),
              React.createElement(AttemptView, { started: this.state.started, onEnter: this.checkOnEnter })
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              'div',
              { className: 'container' },
              React.createElement(
                'aside',
                null,
                React.createElement(TimerView, { started: this.state.started, onStop: this.reset }),
                React.createElement(ScoreView, { started: this.state.started })
              ),
              React.createElement(BoardView, { started: this.state.started })
            )
          ),
          React.createElement(
            'footer',
            null,
            React.createElement(
              'div',
              { className: 'container' },
              '© Copyright 2016 Leonardo Quixadá. All rights reserved. ',
              React.createElement(
                'a',
                { href: 'https://github.com/lquixada/boggle' },
                'Github'
              )
            )
          )
        )
      );
    }
  });

  /*
   * Dictionary
   *
   * NOTE: It is possible to install multiple or different dictionaries here,
   * it could be local (a huge word array downloaded to the browser) or any web dictionary
   * with an api such as Wiktionary.
   */
  function Dictionary() {}

  Dictionary.prototype = {
    check: function (word, cb) {
      var url = 'https://en.wiktionary.org/w/api.php?action=query&format=json&callback=?&titles=';

      return $.getJSON(url + word.toLowerCase(), function (data) {
        cb(!data.query.pages[-1]);
      });
    }
  };

  return App;
});
