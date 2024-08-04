'use client'

import { useState } from "react"
import { createCard } from "@/lib/card";
import { useListContext } from "@/context/ListContext";

export default function AddCardButton({listId}: {listId: string}) {
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState('');


  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.currentTarget.value);
  }

  function handleShowInput() {
    setShowInput(true)
  }

  function handleCloseInput() {
    setShowInput(false)
  }

  const card = { title: inputText}
  return (
    <div className="mt-2">
      {
        showInput ?
        <div className="mt-2">
          <input className="w-full p-2" onChange={handleInput} type="text" placeholder="Enter the title of the card" />
          <AddCard card={card} listId={listId} />
          <button className="hover:bg-slate-500 p-2 mt-2 ml-2 rounded" onClick={handleCloseInput}>X</button>
        </div>
        :
        <button className="pl-2 text-slate-200 hover:bg-slate-500 transition-colors rounded w-full text-left" onClick={handleShowInput}>
          Add Card
        </button>
      }
    </div>
  )
}

interface CardData {
  title: string,
  description?: string,
  coverColor?: string,
  coverImage?: string,
  startDate?: string,
  dueDate?: string
}

function AddCard({card, listId}: { card: CardData, listId: string}) {
  const {list, setList} = useListContext();

  const listIndex = list.findIndex((elem) => elem.listId.toString() === listId);

  async function handleCreateCard() {
    const result = await createCard(listId, card)

    if (result) {
      const listCopy = [...list];
      listCopy[listIndex].cards.push(result)
      setList(listCopy);
    }
  }

  return (
    <button onClick={(handleCreateCard)} className="p-2 mt-2 text-left rounded bg-blue-500 hover:bg-blue-400 transition-colors">
      Add a card
    </button>
  )
}