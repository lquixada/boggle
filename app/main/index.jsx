/*
 * Main
 */

import React from 'react';
import _ from 'underscore';
import $ from 'jquery';
import style from './index.less';

import Attempt from '../attempt';
import Board from '../board';
import Button from '../button';
import Clock from '../clock';
import Score from '../score';


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionary: new Dictionary(),
      minLength: 2,
      started: false
    };
  }

  check(evt) {
    var word = evt.target.value.toUpperCase();

    if (word.length < this.state.minLength) {
      return;
    }

    if (this.checkScore(word) && this.checkBoard(word)) {
      this.checkDictionary(word, (isValid) => {
        this.commit(word, isValid);
      });
    } else {
      this.commit(word, false);
    }
  }

  checkBoard(word) {
    return this.refs.board.check(word);
  }

  checkDictionary(word, cb) {
    return this.state.dictionary.check(word, cb);
  }

  checkScore(word) {
    return this.refs.score.check(word);
  }

  commit(word, scored) {
    this.refs.score.add({
      word: word,
      scored: scored
    });

    this.refs.attempt.clear();
    this.refs.attempt.focus();
  }

  toggle() {
    this.setState({started: !this.state.started});
  }

  reset() {
    this.setState({started: false});
  }

  render() {
    return (
      <main>
        <header>
          <div className="container">
            <h1>BOGGLE</h1>
            <Button ref="button" started={this.state.started} onClick={this.toggle.bind(this)}  />
            <Attempt ref="attempt" started={this.state.started} onEnter={this.check.bind(this)} />
          </div>
        </header>

        <section>
          <div className="container">
            <aside>
              <Clock ref="clock" started={this.state.started} onStop={this.reset.bind(this)} />
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
}

/*
 * Dictionary
 *
 * NOTE: It is possible to install multiple or different dictionaries here,
 * it could be local (a huge word array downloaded to the browser) or any web dictionary
 * with an api such as Wiktionary.
 */
class Dictionary {
  check(word, cb) {
    var url = 'https://en.wiktionary.org/w/api.php?action=query&format=json&callback=?&titles=';

    return $.getJSON(url+word.toLowerCase(), function (data) {
      cb(!data.query.pages[-1]);
    });
  }
}
