'use client'

import {useState} from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function Board () {

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleBoxClick (rowIndex, colIndex) {
    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = 'X';
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