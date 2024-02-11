'use client'

import { useState } from 'react'

export default function Player ({player1='enter name'}) {
  const [newPlayerName, setNewPlayerName] = useState(player1)
  const [isEditing, setIsEditing] = useState(false)

  
  function handleEdit () {
    setIsEditing(status => !status)
    console.log('isEditing: ', isEditing)  
  }

  function handleNameChange (event) {
    setNewPlayerName(event.target.value)
  }

  let playerName = <p>{newPlayerName}</p>
  let btnCaption = 'edit'

  if(isEditing) {
    playerName = <input type='text' required value={newPlayerName} onChange={handleNameChange} />
    btnCaption = 'save'
  }

  return (
    <div className='wrapper'>
      <div className="playerSection">
        {playerName}
        <button onClick={handleEdit}>{btnCaption}</button>
      </div>
    </div>
  )
}