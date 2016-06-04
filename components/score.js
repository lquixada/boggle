/*
 * Score
 */
import _ from 'underscore';
import $ from 'jquery';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class Score extends React.Component {
  render() {
    return (
      <div id="score">
        <header>
          <h2>Score: {this.props.counter}</h2>
        </header>
        <section className="box">
          <table>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </section>
      </div>
    );
  }

  renderRows() {
    return this.props.attempts.map(function (attempt, i) {
      return (
        <tr key={i}>
          <td>{attempt.word}</td>
          <td>{attempt.score}</td>
        </tr>
      );
    });
  }
}

Score.propTypes = {
  attempts: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.any.isRequired,
    word: PropTypes.string.isRequired
  }).isRequired).isRequired,
  counter: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  attempts: state.attempts,
  counter: state.counter
});

export default connect(mapStateToProps)(Score);
