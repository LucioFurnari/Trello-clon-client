"use client"

import { deleteBoard } from "@/lib/board"
import Link from "next/link"
import MessageModal from "@/components/Modal/MessageModal"
import { useState } from "react"

interface BoardItemProp {
  title: string,
  boardId: string
}

export default function BoardItem({ title, boardId }: BoardItemProp) {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);

  async function handleDeleteBoard() {
    const res = await deleteBoard(boardId);
  }

  return (
    <li className="bg-pink-500 cursor-pointer relative">
      <Link 
        href={`/board/${boardId}`} 
        className="inline-block w-full pb-14 pt-2 pl-2">
        { title }
      </Link>
      <button onClick={() => setOpenModal(true)} className="bg-red-600 hover:bg-red-500 p-1 rounded absolute right-4 top-1">Delete</button>
      {openModal && 
      <MessageModal setAction={handleCloseModal}> 
        <>
          <h2 className="text-center">Are you sure you want to delete your board?</h2>
          <span className="text-center">all the cards in it will be deleted</span>
          <button onClick={handleDeleteBoard} className="bg-red-600 hover:bg-red-500 rounded p-2 px-8 text-lg mx-auto mt-4">Delete Board</button>
        </>
      </MessageModal>
      }
    </li>
  )
}