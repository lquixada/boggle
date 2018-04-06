import React from 'react';
import {Map} from 'immutable';
import '../../styles/score.scss';

const Attempt = ({attempt}) => (
  <tr>
    <td>{attempt.get('word')}</td>
    <td>{attempt.get('score')}</td>
  </tr>
);

const Score = ({counter, attempts}) => (
  <div id="score">
    <header>
      <h2>Score: {counter}</h2>
    </header>
    <section className="box">
      <table>
        <tbody>
          {attempts.toJS().map((attempt, i) =>
            <Attempt key={1} attempt={attempts.get(0)} />)}
        </tbody>
      </table>
    </section>
  </div>
);

export default Score;
