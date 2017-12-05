import React from 'react';
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
          {attempts.map((attempt, i) =>
            <Attempt key={i} attempt={attempt} />)}
        </tbody>
      </table>
    </section>
  </div>
);

export default Score;
