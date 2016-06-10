import React from 'react';
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

const mapStateToProps = (state) => ({
  matrix: state.matrix
});

export default connect(mapStateToProps)(Board);
