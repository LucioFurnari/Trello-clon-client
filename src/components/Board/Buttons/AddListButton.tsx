'use client'

import { useState } from "react"

export default function AddListButton() {
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState('');

  function handleShowInput() {
    setShowInput((value: boolean) => true);
  }

  function handleCloseInput() {
    setShowInput((value: boolean) => false);
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.currentTarget.value)
    console.log(event.currentTarget.value)
  }

  return (
    <div>
      {
        showInput && 
        <div>
          <input onChange={handleInput} autoFocus={true} type="text" placeholder="Enter list title..." />
          <button onClick={handleCloseInput}>X</button>
          <AddList />
        </div>
      }
      <button onClick={handleShowInput}>
        Add another list
      </button>
    </div>
  )
}


function AddList() {
  return (
    <button>
      Add list
    </button>
  )
}