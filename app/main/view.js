/*
 * App
 */

define([
  'app/base/view',
  'app/attempt/view',
  'app/board/view',
  'app/control/view',
  'app/score/view',
  'app/timer/view',
  'text!app/main/style.css',
  'text!app/main/template.tpl'
], function (BaseView, AttemptView, BoardView, ControlView, ScoreView, TimerView, css, html) {
  'use strict';

  function App() {
    this.elementId = '#game';

    this.board = new BoardView();
    this.control = new ControlView();
    this.attempt = new AttemptView();
    this.score = new ScoreView();
    this.timer = new TimerView();

    this.minLength = 2;
    this.dictionary = new Dictionary();
  }

  App.prototype = _.extend(new BaseView(css, html), {
    render: function () {
      this.renderTemplate();

      this.board.render();
      this.control.render();
      this.attempt.render();
      this.score.render();
      this.timer.render();
    },

    start: function () {
      var that = this;

      this.board.start();
      this.control.start();
      this.attempt.start();
      this.score.start();
      this.timer.start({
        onStop: function () {
          that.stop();
          alert('Game over!');
        }
      });
    },

    stop: function () {
      this.board.stop();
      this.control.stop();
      this.attempt.stop();
      this.score.stop();
      this.timer.stop();
    },

    checkOnEnter: function (e) {
      if (e.which === 13) {
        this.check(e.target.value.toUpperCase());
      }
    },

    check: function (word) {
      var that = this;

      if (word.length < this.minLength) {
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
    }
  });

  /*
   * Dictionary
   *
   * NOTE: It is possible to install multiple or different dictionaries here,
   * it could be local (a huge word array downloaded to the browser) or any web dictionary
   * with an api such as Wiktionary.
   */
  function Dictionary() {

  }

  Dictionary.prototype = {
    check: function (word, cb) {
      var url = 'https://en.wiktionary.org/w/api.php?action=query&format=json&callback=?&titles=';

      return $.getJSON(url+word.toLowerCase(), function (data) {
        cb(!data.query.pages[-1]);
      });
    }
  };

  return App;
});
