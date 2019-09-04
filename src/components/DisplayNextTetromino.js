import React from 'react';

import {
  StyledDisplayNextTetrominoWrapper,
  StyledDisplayNextTetromino,
  StyledDisplayTetrominoLists
} from './styles/StyledDisplayNextTetromino';

import Cell from './Cell';


const DisplayNextTetronomino = ({ nextTetromino, tetrominoLists }) => (
  <StyledDisplayNextTetrominoWrapper>
    <StyledDisplayNextTetromino
      width={nextTetromino[0].length}
      height={nextTetromino.length}
    >
      {nextTetromino.map((row) => row.map((cell, index) => <Cell key={index} type={cell} />))}
    </StyledDisplayNextTetromino>
    {tetrominoLists.map((tetromino) => (
      <StyledDisplayTetrominoLists
        width={tetromino[0].length}
        height={tetromino.length}
      >
        {tetromino.map((row) => row.map((cell, i) => <Cell key={i} type={cell} />))}
      </StyledDisplayTetrominoLists>
    ))}
  </StyledDisplayNextTetrominoWrapper>
);

export default DisplayNextTetronomino;
