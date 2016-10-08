import '../../styles/game.scss';
import React from 'react';
import { Link } from 'react-router';

import AttemptContainer from '../containers/attempt';
import BoardContainer from '../containers/board';
import ButtonContainer from '../containers/button';
import ClockContainer from '../containers/clock';
import Copyright from './copyright';
import Social from './social';
import ScoreContainer from '../containers/score';
import Title from './title';


class Game extends React.Component {
  render() {
    return (
      <main>
        <header>
          <div className="container">
            <Title />
            <AttemptContainer />
            <ButtonContainer />
          </div>
        </header>

        <section>
          <div className="container">
            <aside>
              <ClockContainer />
              <ScoreContainer />
            </aside>
            <BoardContainer />
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
  }
}

export default Game;
