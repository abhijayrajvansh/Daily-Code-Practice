'use client'

import {useState} from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function Board () {

  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [playerTurn, setPlayerTurn] = useState('X');

  function gameOver () {
    if (gameBoard[0][0] &&  gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][1] === gameBoard[0][2]) {
      return true;
    }
    return false;
  }

  function handleBoxClick (rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex]) return; // prevents player from double clicking and rechanging value of the box
    // changes player turn after every click
    setPlayerTurn((prevTurn) => prevTurn === 'X' ? 'O' : 'X'); 
  
    // updates the value in the board
    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = playerTurn;
      return updatedBoard;
    });
  }

  if(gameOver()) {
    return (
        <div className='gameBoard'>
          {gameBoard.map((row, rowIndex) => <div key={rowIndex}>
          <div className='rowBox'>{row.map((col, colIndex) => <div key={colIndex}>
            <div className='gameBox'>{col}</div>
          </div>)}</div>
        </div>)}
        <h1>Game Over</h1>
      </div>
    )
  }
  
  return (
    <div className='gameBoard'>
        {gameBoard.map((row, rowIndex) => <div key={rowIndex}>
        <div className='rowBox'>{row.map((col, colIndex) => <div key={colIndex}>
          <div className='gameBox' onClick={() => handleBoxClick (rowIndex, colIndex)}>{col}</div>
        </div>)}</div>
      </div>)}
    </div>
  )
}