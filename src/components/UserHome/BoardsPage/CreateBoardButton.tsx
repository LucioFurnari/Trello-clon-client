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
          <form action={createBoardWithId}>
            <input type="text" placeholder="Board title" name="title" />
            <button type="submit">Create</button>
          </form>
        </MessageModal>
      }
    </>
  )
}