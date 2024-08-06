"use client"

import { useState } from "react"
import MessageModal from "@/components/Modal/MessageModal"

export default function CreateBoardButton() {
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
          <form>
            <input type="text" placeholder="Board title" />
          </form>
        </MessageModal>
      }
    </>
  )
}