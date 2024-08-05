'use client'

import { useState } from "react"
import { addList } from "@/lib/list";
import { useParams } from "next/navigation";
import { useListContext } from "@/context/ListContext";

interface AddListProps {
  name: string,
}

export default function AddListButton() {
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
          <AddList name={inputText} />
        </div>
      }
      <button className=" backdrop-blur bg-white/30 p-2 px-4 rounded-xl" onClick={handleShowInput}>
        Add another list
      </button>
    </div>
  )
}

function AddList({ name }: AddListProps) {
  const params = useParams<{ board: string}>()
  const {setList, list} = useListContext();

  async function handleAddList() {
    const result = await addList(params.board, name);
    setList([...list, result])
  }

  return (
    <button type="button" onClick={handleAddList}>
      Add list
    </button>
  )
}