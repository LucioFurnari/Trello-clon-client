'use client'

import { useState } from "react"
import { createCard } from "@/lib/card";
import { useListContext } from "@/context/ListContext";
import DatePicker from "react-datepicker";

export default function AddCardButton({listId}: {listId: string}) {
  const [showInput, setShowInput] = useState(false);

  function handleShowInput() {
    setShowInput(true)
  }

  function handleCloseInput() {
    setShowInput(false)
  }

  return (
    <>
      {
        showInput ?
        <>
          <AddCardForm listId={listId} setAction={handleCloseInput}/>
        </>
        :
        <button className="pl-2 py-2 mt-2 text-slate-200 bg-blue-600 hover:bg-blue-500 transition-colors rounded w-full text-left" onClick={handleShowInput}>
          Add Card
        </button>
      }
    </>
  )
}

function AddCardForm({listId, setAction}: { listId: string, setAction: () => void}) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const {list, setList} = useListContext();

  const listIndex = list.findIndex((elem) => elem.listId.toString() === listId);

  async function handleCreateCard(event: React.FormEvent) {
    event.preventDefault();
    const card = { title: title, dueDate: dueDate}

    const result = await createCard(listId, card)

    if (result) {
      const listCopy = [...list];
      listCopy[listIndex].cards.push(result)
      setList(listCopy);
      setAction();
    }
  }

  return (
    <form onSubmit={handleCreateCard}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="border p-2 rounded w-full"
      />
      <DatePicker
        selected={dueDate}
        onChange={(date: Date | null) => setDueDate(date)}
        placeholderText="Set due date"
        className="border p-2 rounded w-full mt-2"
      />
      <button type="submit" className="inline px-4 p-2 mt-2 text-left rounded text-slate-200 bg-blue-600 hover:bg-blue-500 transition-colors">
        Add a card
      </button>
      <button className="hover:bg-slate-500 text-white p-2 mt-2 ml-2 rounded" onClick={setAction}>X</button>
    </form>
  )
}