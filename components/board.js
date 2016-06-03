/*
 * Board
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Board from '../utils/board';

export default class BoardView extends React.Component {
  getRows() {
    return this.props.matrix.map((row, i) => {
      return <tr key={i}>{this.getCells(row)}</tr>;
    });
  }

  getCells(row) {
    return row.map((cell, i) => {
      return <td key={i}>{cell}</td>;
    });
  }

  render() {
    return (
      <div id="board" className="box">
        <table>
          <tbody>
            {this.getRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

BoardView.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
};

const mapStateToProps = (state) => ({
  matrix: state.matrix
});

export default connect(mapStateToProps)(BoardView);
