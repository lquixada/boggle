import React from 'react';

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
            <h1>BOGGLE</h1>
            <Button />
            <Attempt />
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
              &copy; Copyright 2016 Leonardo Quixadá. All rights reserved.
            </div>

            <div className="social">
              <ul>
                <li><a href="https://github.com/lquixada/"><img src="images/logo-github.png" /></a></li>
                <li><a href="https://facebook.com/lquixada/"><img src="images/logo-facebook.png" /></a></li>
                <li><a href="https://twitter.com/lquixada/"><img src="images/logo-twitter.png" /></a></li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    );
  }
}

export default App;
