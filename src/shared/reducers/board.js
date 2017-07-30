import {List} from 'immutable';
import groupBy from 'lodash/groupBy';
import invokeMap from 'lodash/invokeMap';
import toArray from 'lodash/toArray';
import sample from 'lodash/sample';

class Board {
  constructor() {
    this.dim = 4;
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
  }

  place(drawn) {
    let i = 0; // lodash's groupBy doesn't give us an index to the iteratee, so we've created one
    let grouped = groupBy(drawn, () => ++i % this.dim);
    grouped = toArray(grouped);

    return List(grouped.map(List));
  }

  shake() {
    return invokeMap(this.dice, 'roll');
  }

  start() {
    const drawn = this.shake();
    this._matrix = this.place(drawn);
  }

  clear() {
    this._matrix = List.of(
      List([' ', ' ', ' ', ' ']),
      List([' ', ' ', ' ', ' ']),
      List([' ', ' ', ' ', ' ']),
      List([' ', ' ', ' ', ' '])
    );
  }

  getMatrix() {
    return this._matrix;
  }
}

class Die {
  constructor(letters) {
    this.sides = letters.split('');
  }

  roll() {
    return sample(this.sides);
  }
}

let board = new Board();
board.clear();

export default (state = board.getMatrix(), action) => {
  switch (action.type) {
    case 'START_GAME':
      board = new Board();
      board.start();
      return board.getMatrix();
    case 'STOP_GAME':
      board = new Board();
      board.clear();
      return board.getMatrix();
    default:
      return state;
  }
};
