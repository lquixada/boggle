/*
 * Board
 */
import _ from 'underscore';
import React from 'react';

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

class Board {
  constructor() {
    this.dim = 4;
    this.minLength = 2;
    this.dice = [
      new Die('AOBBOJ'),
      new Die('WHGEEN'),
      new Die('NRNZHL'),
      new Die('NAEAGE'),
      new Die('DIYSTT'),
      new Die('IESTSO'),
      new Die('AOTTWO'),
      new Die('HQUMNI'),
      new Die('RYTLTE'),
      new Die('POHCSA'),
      new Die('LREVYD'),
      new Die('EXLDIR'),
      new Die('IENSUE'),
      new Die('SFFKAP'),
      new Die('IOTMUC'),
      new Die('EHWVTR')
    ];
    this.reset();
  }

  get(i, j) {
    try {
      return this.matrix[i][j];
    } catch(e) {
      return '*';
    }
  }

  place(drawn) {
    var grouped = _.groupBy(drawn, function(letter, i) {
      return (i%this.dim);
    }, this);

    return _.toArray(grouped);
  }

  shake() {
    return _.invoke(this.dice, 'roll');
  }

  start() {
    var drawn = this.shake();
    this.matrix = this.place(drawn);
  }

  stop() {
    this.reset();
  }

  reset() {
    this.matrix = [
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ']
    ];
  }

  check(word) {
    if (word.length < this.minLength) {
      return false;
    }

    word = word.toUpperCase();

    // Find the first letter
    for (var i=0; i<this.dim; i++) {
      for (var j=0; j<this.dim; j++) {
        if (this.get(i, j) === word.charAt(0)) {
          // From there, find the sequence, letter by letter
          if (this.findSequence(word, i, j)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  findSequence(seq, i, j) {
    var found;

    if (seq.length<=1) {
      return true;
    }

    found = this.matrix[i][j];

    // Mark temporarily in order to not traverse the same cell twice
    this.matrix[i][j] = ' ';

    for (var u=-1; u<=1; u++) {
      for (var v=-1; v<=1; v++) {
        if (this.get(i+u, j+v) === seq.charAt(1)) {
          if (this.findSequence(seq.substr(1), i+u, j+v)) {
            this.matrix[i][j] = found;
            return true;
          }
        }
      }
    }

    this.matrix[i][j] = found;
    return false;
  }
}

/*
 * Die
 */

class Die {
  constructor(letters) {
    this.sides = letters.split('');
  }

  roll() {
    return _.sample(this.sides);
  }
}
