import '../styles/board.scss';
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
    return this.props.matrix.map((row, i) =>
      (<tr key={i}>{this.renderCells(row)}</tr>)
    );
  }

  renderCells(row) {
    return row.map((cell, i) =>
      (<td key={i}>{cell}</td>)
    );
  }
}

const mapStateToProps = ({ matrix }) => ({ matrix });

export default connect(mapStateToProps)(Board);
