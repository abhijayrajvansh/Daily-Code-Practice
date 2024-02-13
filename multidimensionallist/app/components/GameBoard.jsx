'use client'

import {useState} from 'react';
import {winningLogic}  from './winningLogic';
import { Baloo_2 } from 'next/font/google';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function Board () {

  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [playerTurn, setPlayerTurn] = useState('X');

  let gameOver = false;

  let box1, box2, box3, s1, s2,s3, s4, s5, s6;
  for (let i = 0; i < winningLogic.length; i++) {
    s1 = winningLogic[i][0].row;
    s2 = winningLogic[i][0].col;

    s3 = winningLogic[i][1].row;
    s4 = winningLogic[i][1].col;

    s5 = winningLogic[i][2].row;
    s6 = winningLogic[i][2].col;

    box1 = gameBoard[s1][s2];
    box2 = gameBoard[s3][s4];
    box3 = gameBoard[s5][s6];

    if (box1 && box1 === box2 && box2 === box3) gameOver = true;
  }


  function handleBoxClick (rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex] || gameOver) return; // prevents player from double clicking and rechanging value of the box
    // changes player turn after every click
    setPlayerTurn((prevTurn) => prevTurn === 'X' ? 'O' : 'X'); 
  
    // updates the playerturn/input in the board
    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = playerTurn;
      return updatedBoard;
    });
  } 

  return (
    <div className='gameBoard'>
        {gameBoard.map((row, rowIndex) => <div key={rowIndex}>
        <div className='rowBox'>{row.map((col, colIndex) => <div key={colIndex}>
          <div className='gameBox' onClick={() => handleBoxClick(rowIndex, colIndex)}>{col}</div>
        </div>)}
        </div>
      </div>)}
      {gameOver && <h1>Game Over!</h1>}
    </div>
  )
}