'use client'

import { deleteList } from "@/lib/list"
import { useListContext } from "@/context/ListContext"
import { useParams } from "next/navigation"
import MessageModal from "@/components/Modal/MessageModal"
import { useState } from "react"

interface DeleteListButtonProps {
  listId: string,
}

export default function DeleteListButton({ listId }: DeleteListButtonProps) {
  const { list, setList } = useListContext();
  const [openModal, setOpenModal] = useState(false);
  const params = useParams<{ board: string}>();

  async function handleDeleteList() {
    const res = await deleteList(listId, params.board)

    if (res) {
      setList(list.filter(item => item.listId !== parseInt(listId)))
    }

  }

  function handleOpenModal(){
    setOpenModal(true)
  }

  function handleCloseModal() {
    setOpenModal(false)
  }

  return (
    <div>
      {openModal &&
        <MessageModal setAction={handleCloseModal}>
          <h2 className="text-lg font-semibold">Are you sure you want to delete the list?</h2>
          <p>(All the cards it contains will be deleted.)</p>
          <button className="bg-red-600 hover:bg-red-500 p-4 rounded-md mt-4 font-semibold" onClick={handleDeleteList}>
            Delete List
          </button>
        </MessageModal>
      }
      <button className="text-gray-200 hover:bg-slate-400 p-2 rounded" onClick={handleOpenModal}>
        X
      </button>
    </div>
  )
}