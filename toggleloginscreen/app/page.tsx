'use client'

import { useState } from "react"

export default function page () {

  const [varient, setVarient] = useState('login');

  function handleToggle () {
    setVarient((currentVarient) => currentVarient === 'login' ? 'signup' : 'login')
  }

  return (//flex justify-center items-center
    <div className=" border-2 b border-red-500 flex flex-col items-center justify-center h-full space-y-28">
      <h1 className="text-6xl font-bold text-blue-500">{varient === 'login' ? 'Log in screen' : 'Sign up screen'}</h1>
      <div className="flex space-x-2">
        <p>{varient === 'login' ? 'create an account today,' : 'already a member,'}</p>
        <p onClick={handleToggle}
        className="font-bold cursor-pointer">{varient === 'login' ? 'Sign Up' : 'log in'}</p>
      </div>
    </div>
  )
}