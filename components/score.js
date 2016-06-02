/*
 * Score
 */
import _ from 'underscore';
import $ from 'jquery';
import React from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';

class Score extends React.Component {
  check(word) {
    var found = _.findWhere(this.props.attempts, {word: word});
    return !Boolean(found);
  }

  getItems() {
    return this.props.attempts.map(function (attempt, i) {
      return (
        <tr key={i}>
          <td>{attempt.word}</td>
          <td>{attempt.score}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div id="score">
        <header>
          <h2>Score: {this.props.counter}</h2>
        </header>
        <section className="box">
          <table>
            <tbody>
              {this.getItems()}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

Score.propTypes = {
  attempts: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired
  }).isRequired).isRequired,
  counter: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {
    attempts: state.attempts,
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Score);
