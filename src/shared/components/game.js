import React from 'react';

import Input from '../containers/input';
import Board from '../containers/board';
import Button from '../containers/button';
import Clock from '../containers/clock';
import Copyright from './copyright';
import Social from './social';
import Score from '../containers/score';
import Title from './title';
import Ribbon from './ribbon';

import '../../styles/game.scss';

const Game = () => (
  <main>
    <Ribbon />

    <header>
      <div className="container">
        <Title />
        <Input />
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
        <Copyright />
        <Social />
      </div>
    </footer>
  </main>
);

export default Game;
