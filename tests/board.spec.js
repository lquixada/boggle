import './setup';
import React from 'react';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import mountConnected from './helper';
import { List } from 'immutable';
import { bindActionCreators } from 'redux'
import configureStore from '../store';
import * as actionCreators from '../actions';
import BoardChecker from '../utils/board-checker';
import Board from '../components/board';

chai.use(chaiImmutable);
const expect = chai.expect;

describe('<Board />', () => {
  let actions;
  let component;
  let store;

  beforeEach(() => {
    store = configureStore();
    component = mountConnected(<Board />, store);
    actions = bindActionCreators(actionCreators, store.dispatch);
  });

  it('is empty by default', () => {
    const text = component.find('table').text();
    expect(text.trim()).to.be.empty;
  });

  it('is filled when the game has started', () => {
    actions.startGame();
    const text = component.find('table').text();
    expect(text.trim()).to.not.be.empty;
    expect(text.trim()).to.have.lengthOf(16);
  });

  it('is empty when the game has stopped', () => {
    actions.stopGame();
    const text = component.find('table').text();
    expect(text.trim()).to.be.empty;
  });

});

describe('BoardChecker', () => {
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
    const board = new BoardChecker(matrix);

    expect(board.hasWord('norm')).to.be.equal(true);
  });

  it('finds backwards word', () => {
    const matrix = List([
      List(['O', 'D', 'E', 'E']),
      List(['E', 'E', 'O', 'S']),
      List(['M', 'R', 'O', 'N']),
      List(['A', 'I', 'X', 'V'])
    ]);
    const board = new BoardChecker(matrix);

    expect(board.hasWord('norm')).to.be.equal(true);
  });

  it('finds word on diagonal', () => {
    const matrix = List([
      List(['N', 'D', 'E', 'E']),
      List(['E', 'O', 'O', 'S']),
      List(['M', 'R', 'R', 'N']),
      List(['A', 'I', 'X', 'M'])
    ]);
    const board = new BoardChecker(matrix);

    expect(board.hasWord('norm')).to.be.equal(true);
  });

  it('finds word on backwards diagonal', () => {
    const matrix = List([
      List(['O', 'D', 'E', 'N']),
      List(['E', 'O', 'O', 'S']),
      List(['T', 'R', 'R', 'N']),
      List(['M', 'I', 'X', 'M'])
    ]);
    const board = new BoardChecker(matrix);

    expect(board.hasWord('norm')).to.be.equal(true);
  });

  it('finds circular word', () => {
    const matrix = List([
      List(['O', 'D', 'E', 'N']),
      List(['E', 'O', 'N', 'S']),
      List(['T', 'R', 'M', 'N']),
      List(['M', 'I', 'X', 'M'])
    ]);
    const board = new BoardChecker(matrix);

    expect(board.hasWord('norm')).to.be.equal(true);
  });

});
