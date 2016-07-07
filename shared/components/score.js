import '../styles/score.less';
import React from 'react';
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
          <td>{attempt.get('word')}</td>
          <td>{attempt.get('score')}</td>
        </tr>
      );
    });
  }
}

const mapStateToProps = ({ attempts, counter }) => ({ attempts, counter });

export default connect(mapStateToProps)(Score);
