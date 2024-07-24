'use client'

import { useState } from "react"
import { addList } from "@/lib/list";
import { useParams } from "next/navigation";

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
    setInputText(event.currentTarget.value);
  }

  return (
    <div>
      {
        showInput && 
        <div>
          <input onChange={handleInput} autoFocus={true} type="text" placeholder="Enter list title..." />
          <button onClick={handleCloseInput}>X</button>
          <AddList name={inputText} />
        </div>
      }
      <button onClick={handleShowInput}>
        Add another list
      </button>
    </div>
  )
}

interface AddListProps {
  name: string
}

function AddList({ name }: AddListProps) {
  const params = useParams<{ board: string}>()

  async function handleAddList() {
    const result = await addList(params.board, name);
  }

  return (
    <button type="button" onClick={handleAddList}>
      Add list
    </button>
  )
}