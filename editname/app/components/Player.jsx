'use client'

import { useState } from 'react'

export default function Player ({player1}) {

  const [isEditing, setIsEditing] = useState(false)

  
  function handleEdit () {
    setIsEditing(status => !status)
    console.log('isEditing: ', isEditing)  
  }

  let playerName = <p>{player1}</p>
  let btnCaption = 'edit'

  if(isEditing) {
    playerName = <input type='text' required value={player1}/>
    btnCaption = 'save'
  }

  return (
    <div className="playerSection">
      {playerName}
      <button onClick={handleEdit}>{btnCaption}</button>
    </div>
  )
}