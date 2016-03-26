/*
 * Main
 */
var React = require('react');
var _ = require('underscore');
var $ = require('jquery');
var style = require('./style.less');

var Attempt = require('../attempt/view.jsx');
var Board = require('../board/view.jsx');
var Button = require('../button/view.jsx');
var Clock = require('../clock/view.jsx');
var Score = require('../score/view.jsx');


var Main = React.createClass({
  getInitialState: function () {
    return {
      dictionary: new Dictionary(),
      minLength: 2,
      started: false
    };
  },

  check: function (evt) {
    var that = this;
    var word = evt.target.value.toUpperCase();

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
    return this.refs.board.check(word);
  },

  checkDictionary: function (word, cb) {
    return this.state.dictionary.check(word, cb);
  },

  checkScore: function (word) {
    return this.refs.score.check(word);
  },

  commit: function (word, scored) {
    this.refs.score.add({
      word: word,
      scored: scored
    });

    this.refs.attempt.clear();
    this.refs.attempt.focus();
  },

  toggle: function () {
    this.setState({started: !this.state.started});
  },

  reset: function () {
    this.setState({started: false});
  },

  render: function () {
    return (
      <main>
        <header>
          <div className="container">
            <h1>BOGGLE</h1>
            <Button ref="button" started={this.state.started} onClick={this.toggle}  />
            <Attempt ref="attempt" started={this.state.started} onEnter={this.check} />
          </div>
        </header>

        <section>
          <div className="container">
            <aside>
              <Clock ref="clock" started={this.state.started} onStop={this.reset} />
              <Score ref="score" started={this.state.started} />
            </aside>
            <Board ref="board" started={this.state.started} />
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

module.exports = Main;
