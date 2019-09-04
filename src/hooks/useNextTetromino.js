import { useState, useCallback } from 'react';

import { TETROMINOS } from '../tetrominos';

const tetrominos = 'IJLOSTZ';

const createTetromino = () => TETROMINOS[tetrominos[Math.floor(Math.random() * tetrominos.length)]].shape;

const createTetrominoLists = () => {
  const tetrominoLists = [];

  for (let i = 0; i < 9; i += 1) {
    tetrominoLists.push(createTetromino());
  }

  return tetrominoLists;
};

export const useNextTetromino = () => {
  const [nextTetromino, setNextTetromino] = useState(createTetromino());
  const [tetrominoLists, setTetrominoLists] = useState(createTetrominoLists());

  const updateTetromino = useCallback(() => {
    const clonedLists = JSON.parse(JSON.stringify(tetrominoLists));
    const newTetromino = clonedLists.shift();

    setNextTetromino(newTetromino);
    setTetrominoLists([...clonedLists, createTetromino()]);
  });

  return [nextTetromino, tetrominoLists, updateTetromino];
};
