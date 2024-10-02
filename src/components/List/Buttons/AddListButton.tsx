'use client'

import { useState } from "react"
import { addList } from "@/lib/list";
import { useParams } from "next/navigation";
import { useListContext } from "@/context/ListContext";

export default function AddListButton() {
  const [showInput, setShowInput] = useState(false);

  function handleShowInput() {
    setShowInput(true);
  }

  function handleCloseInput() {
    setShowInput(false);
  }

  return (
    <div>
      {
        showInput ?
          <AddList setAction={handleCloseInput}/>
        :
        <button className="backdrop-blur bg-white/30 p-2 px-4 rounded-xl ml-4" onClick={handleShowInput}>
          Add another list
        </button>
      }
    </div>
  )
}

function AddList({ setAction }: {setAction: () => void}) {
  const params = useParams<{ board: string}>();
  const [inputText, setInputText] = useState('');
  const { setList } = useListContext();

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.currentTarget.value);
  }

  async function handleAddList() {
    const result = await addList(params.board, inputText);

    if (result) {
      setList((prevList) => {
        return [...prevList, result]
      });
      setAction();
    }
  }

  return (
    <div className="bg-slate-600 p-4 rounded-xl ml-4">
      <input className="block rounded pl-1 py-1 mb-4 bg-slate-700 text-gray-200 " onChange={handleInput} autoFocus={true} type="text" placeholder="Enter list title..." />
      <button className="bg-blue-600 hover:bg-blue-500 text-gray-200 rounded p-2 px-4" type="button" onClick={handleAddList}>
        Add list
      </button>
      <button className="p-2 hover:bg-slate-400 text-gray-200 rounded ml-2" onClick={setAction}>X</button>
    </div>
  )
}