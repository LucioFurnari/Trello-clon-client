'use client'

import { useState } from "react"
import { addList } from "@/lib/list";
import { useParams } from "next/navigation";

interface AddListButtonProps {
  setAction: (value: any) => void,
  list: any[]
}

interface AddListProps extends AddListButtonProps {
  name: string,
}

export default function AddListButton({ setAction, list }: AddListButtonProps) {
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState('');

  function handleShowInput() {
    setShowInput(true);
  }

  function handleCloseInput() {
    setShowInput(false);
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
          <AddList name={inputText} setAction={setAction} list={list}/>
        </div>
      }
      <button onClick={handleShowInput}>
        Add another list
      </button>
    </div>
  )
}

function AddList({ name, setAction, list }: AddListProps) {
  const params = useParams<{ board: string}>()

  async function handleAddList() {
    const result = await addList(params.board, name);
    setAction([...list, result])
  }

  return (
    <button type="button" onClick={handleAddList}>
      Add list
    </button>
  )
}