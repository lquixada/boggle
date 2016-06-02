/*
 * Board
 */
import _ from 'underscore';
import React from 'react';
import Board from '../utils/board';

export default class BoardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Board()
    };
  }

  check(word) {
    return this.state.board.check(word);
  }

  componentWillUpdate() {
    if (this.props.started) {
      this.state.board.stop();
    } else {
      this.state.board.start();
    }
  }

  getRows(board) {
    return board.matrix.map(function (row, i) {
      return <tr key={i}>{this.getCells(row)}</tr>;
    }, this);
  }

  getCells(row) {
    return row.map(function (cell, i) {
      return <td key={i}>{cell}</td>;
    });
  }

  render() {
    return (
      <div id="board" className="box">
        <table>
          <tbody>
            {this.getRows(this.state.board)}
          </tbody>
        </table>
      </div>
    );
  }
}
