import React from 'react';
import { Link } from 'react-router';

import Attempt from './attempt';
import Board from './board';
import Button from './button';
import Clock from './clock';
import Score from './score';


class App extends React.Component {
  render() {
    return (
      <main>
        <header>
          <div className="container">
            <h1><Link to="/">BOGGLE</Link></h1>
            <Attempt />
            <Button />
          </div>
        </header>

        <section>
          <div className="container">
            <aside>
              <Clock />
              <Score />
            </aside>
            <Board />
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="copyright">
              &copy; Copyright 2016 <Link to="/about">Leonardo Quixadá</Link>. All rights reserved.
              <a href="https://travis-ci.org/lquixada/boggle">
                <img src="https://travis-ci.org/lquixada/boggle.svg?branch=master" className="build-status" />
              </a>
            </div>

            <div className="social">
              <ul>
                <li><a href="https://github.com/lquixada/"><img src="/public/images/logo-github.png" /></a></li>
                <li><a href="https://facebook.com/lquixada/"><img src="/public/images/logo-facebook.png" /></a></li>
                <li><a href="https://twitter.com/lquixada/"><img src="/public/images/logo-twitter.png" /></a></li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    );
  }
}

export default App;
