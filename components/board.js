/*
 * Board
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export default class Board extends React.Component {
  render() {
    return (
      <div id="board" className="box">
        <table>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }

  renderRows() {
    return this.props.matrix.map((row, i) => {
      return <tr key={i}>{this.renderCells(row)}</tr>;
    });
  }

  renderCells(row) {
    return row.map((cell, i) => {
      return <td key={i}>{cell}</td>;
    });
  }
}

Board.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
};

const mapStateToProps = (state) => ({
  matrix: state.matrix
});

export default connect(mapStateToProps)(Board);
