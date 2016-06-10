import './setup';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import { List } from 'immutable';
import { bindActionCreators } from 'redux'
import configureStore from '../store';
import * as actionCreators from '../actions';
import Board from '../utils/Board';

chai.use(chaiImmutable);
const expect = chai.expect;

describe('Board checker', () => {
  let actions;
  let store;
  let state;

  beforeEach(() => {
    store = configureStore();
    actions = bindActionCreators(actionCreators, store.dispatch);
  });

  it('finds regular word', () => {
    const matrix = List([
      List(['O', 'D', 'E', 'E']),
      List(['E', 'E', 'O', 'S']),
      List(['N', 'O', 'R', 'M']),
      List(['A', 'I', 'X', 'V'])
    ]);
    const board = new Board(matrix);

    expect(board.hasWord('norm')).to.be.equal(true);
  });

  it('finds backwards word', () => {
    const matrix = List([
      List(['O', 'D', 'E', 'E']),
      List(['E', 'E', 'O', 'S']),
      List(['M', 'R', 'O', 'N']),
      List(['A', 'I', 'X', 'V'])
    ]);
    const board = new Board(matrix);

    expect(board.hasWord('norm')).to.be.equal(true);
  });

  it('finds word on diagonal', () => {
    const matrix = List([
      List(['N', 'D', 'E', 'E']),
      List(['E', 'O', 'O', 'S']),
      List(['M', 'R', 'R', 'N']),
      List(['A', 'I', 'X', 'M'])
    ]);
    const board = new Board(matrix);

    expect(board.hasWord('norm')).to.be.equal(true);
  });

  it('finds word on backwards diagonal', () => {
    const matrix = List([
      List(['O', 'D', 'E', 'N']),
      List(['E', 'O', 'O', 'S']),
      List(['T', 'R', 'R', 'N']),
      List(['M', 'I', 'X', 'M'])
    ]);
    const board = new Board(matrix);

    expect(board.hasWord('norm')).to.be.equal(true);
  });

  it('finds circular word', () => {
    const matrix = List([
      List(['O', 'D', 'E', 'N']),
      List(['E', 'O', 'N', 'S']),
      List(['T', 'R', 'M', 'N']),
      List(['M', 'I', 'X', 'M'])
    ]);
    const board = new Board(matrix);

    expect(board.hasWord('norm')).to.be.equal(true);
  });

});
