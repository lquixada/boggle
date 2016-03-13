/*
 * App
 */

define([
  'react',
  'react-dom',
  'app/attempt/view',
  'app/board/view',
  'app/control/view',
  'app/score/view',
  'app/timer/view',
  'text!app/main/style.css'
], function (React, ReactDOM, AttemptView, BoardView, ControlView, ScoreView, TimerView, css) {
  'use strict';

  var App = React.createClass({
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
      this.setState({started: !this.state.started});
    },

    reset: function () {
      this.setState({started: false});
    },

    render: function () {
      return (
        <div>
          <style type="text/css">{css}</style>
          <main>
            <header>
              <div className="container">
                <h1>BOGGLE</h1>
                <ControlView started={this.state.started} onClick={this.toggle}  />
                <AttemptView started={this.state.started} onEnter={this.checkOnEnter} />
              </div>
            </header>

            <section>
              <div className="container">
                <aside>
                  <TimerView started={this.state.started} onStop={this.reset} />
                  <ScoreView started={this.state.started} />
                </aside>
                <BoardView started={this.state.started} />
              </div>
            </section>

            <footer>
              <div className="container">
                &copy; Copyright 2016 Leonardo Quixadá. All rights reserved. <a href="https://github.com/lquixada/boggle">Github</a>
              </div>
            </footer>
          </main>
        </div>
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
