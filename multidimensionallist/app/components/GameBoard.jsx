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
  

  function handleBoxClick (rowIndex, colIndex) {
    // changes player turn after every click
    setPlayerTurn((prevTurn) => prevTurn === 'X' ? 'O' : 'X')
    
    // updates the value in the board
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
          <div className='gameBox' onClick={() => handleBoxClick (rowIndex, colIndex)}>{col}</div>
        </div>)}</div>
      </div>)}
    </div>
  )
}