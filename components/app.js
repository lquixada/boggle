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
            &copy; Copyright 2016 Leonardo Quixadá. All rights reserved. <a href="https://github.com/lquixada/boggle">Github</a>
          </div>
        </footer>
      </main>
    );
  }
}

export default App;
