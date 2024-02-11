import Box from './Box'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard () {

  return (
    <div className='gameBoard'>
        {initialGameBoard.map((row, rowIndex) => <div key={rowIndex}>
        <div className='rowBox'>{row.map((col, colIndex) => <div key={colIndex}>
          <Box value={initialGameBoard[rowIndex][colIndex]}/>
        </div>)}</div>
      </div>)}
    </div>
  )
}