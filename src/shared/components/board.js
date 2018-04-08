import React from 'react';

import '../../styles/board.scss';

const Cell = ({letter}) => (
  <td>{letter}</td>
);

const Row = ({letters}) => (
  <tr>
    {letters.map((letter, i) =>
      <Cell key={i} letter={letter} />)}
  </tr>
);

const Board = ({matrix}) => (
  <div id="board" className="box">
    <table>
      <tbody>
        {matrix.map((letters, i) =>
          <Row key={i} letters={letters} />)}
      </tbody>
    </table>
  </div>
);

export default Board;
