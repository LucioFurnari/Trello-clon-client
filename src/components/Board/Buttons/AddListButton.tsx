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
        showInput ?
        <div className="bg-slate-600 p-4 rounded-xl">
          <input className="block rounded pl-1 py-1 mb-2 bg-slate-700" onChange={handleInput} autoFocus={true} type="text" placeholder="Enter list title..." />
          <AddList name={inputText} />
          <button className="p-2 hover:bg-slate-400 text-gray-200 rounded ml-2" onClick={handleCloseInput}>X</button>
        </div>
        :
        <button className="backdrop-blur bg-white/30 p-2 px-4 rounded-xl" onClick={handleShowInput}>
          Add another list
        </button>
      }
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
    <button className="bg-sky-600 hover:bg-sky-500 rounded p-2 px-4" type="button" onClick={handleAddList}>
      Add list
    </button>
  )
}