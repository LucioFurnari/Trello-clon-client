"use client"

import { useState } from "react"
import MessageModal from "@/components/Modal/MessageModal"
import { createBoard } from "@/lib/board";

interface CreateBoardButtonProps {
  workspaceId: string,
}

export default function CreateBoardButton({workspaceId}: CreateBoardButtonProps) {
  const createBoardWithId = createBoard.bind(null, workspaceId);
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true)
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <button onClick={handleOpenModal} className="bg-zinc-700 text-zinc-300 text-sm hover:bg-zinc-600 p-10">
        Create new board
      </button>
      {
        openModal &&
        <MessageModal setAction={handleCloseModal}>
          <form className="flex flex-col p-2" action={createBoardWithId}>
            <input className="p-2 mb-8 border-b-2 border-gray-700" type="text" placeholder="Board title" name="title" />
            <button className="bg-blue-600 hover:bg-blue-500 py-2 text-xl" type="submit">Create</button>
          </form>
        </MessageModal>
      }
    </>
  )
}