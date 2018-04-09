import {fromJS} from 'immutable';

import BoardChecker from '../board-checker';

describe('BoardChecker', () => {
  it('finds regular word', () => {
    const matrix = fromJS([
      ['O', 'D', 'E', 'E'],
      ['E', 'E', 'O', 'S'],
      ['N', 'O', 'R', 'M'],
      ['A', 'I', 'X', 'V']
    ]);
    const board = new BoardChecker(matrix);

    expect(board.hasWord('norm')).toBe(true);
  });

  it('finds backwards word', () => {
    const matrix = fromJS([
      ['O', 'D', 'E', 'E'],
      ['E', 'E', 'O', 'S'],
      ['M', 'R', 'O', 'N'],
      ['A', 'I', 'X', 'V']
    ]);
    const board = new BoardChecker(matrix);

    expect(board.hasWord('norm')).toBe(true);
  });

  it('finds word on diagonal', () => {
    const matrix = fromJS([
      ['N', 'D', 'E', 'E'],
      ['E', 'O', 'O', 'S'],
      ['M', 'R', 'R', 'N'],
      ['A', 'I', 'X', 'M']
    ]);
    const board = new BoardChecker(matrix);

    expect(board.hasWord('norm')).toBe(true);
  });

  it('finds word on backwards diagonal', () => {
    const matrix = fromJS([
      ['O', 'D', 'E', 'N'],
      ['E', 'O', 'O', 'S'],
      ['T', 'R', 'R', 'N'],
      ['M', 'I', 'X', 'M']
    ]);
    const board = new BoardChecker(matrix);

    expect(board.hasWord('norm')).toBe(true);
  });

  it('finds circular word', () => {
    const matrix = fromJS([
      ['O', 'D', 'E', 'N'],
      ['E', 'O', 'N', 'S'],
      ['T', 'R', 'M', 'N'],
      ['M', 'I', 'X', 'M']
    ]);
    const board = new BoardChecker(matrix);

    expect(board.hasWord('norm')).toBe(true);
  });
});
