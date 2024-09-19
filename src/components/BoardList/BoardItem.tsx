"use client"

import Link from "next/link"
import MessageModal from "@/components/Modal/MessageModal"
import DeleteBoardButton from "./DeleteBoardButton"
import { SVGProps, useState } from "react"
import { BoardData } from "@/types/types"

interface BoardItemProp {
  board: BoardData,
  setAction: (value: any) => void
}

export default function BoardItem({ board, setAction }: BoardItemProp) {
  const {boardId, title, description, coverColor} = board;
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);
  return (
    <li style={coverColor ? {backgroundColor: coverColor} : {backgroundColor: 'rgb(59 130 246 / var(--tw-bg-opacity))'} } className={'cursor-pointer relative rounded'}>
      <Link 
        href={`/board/${boardId}`} 
        className="inline-block w-full pb-14 pt-2 pl-2">
        { title }
      </Link>
      <button onClick={() => setOpenModal(true)} className=" hover:bg-red-500 p-1 rounded absolute right-4 top-1">
        <MdiTrashCanOutline />
      </button>
      {openModal && 
      <MessageModal setAction={handleCloseModal}> 
        <>
          <h2 className="text-center">Are you sure you want to delete your board?</h2>
          <span className="text-center">all the cards in it will be deleted</span>
          <DeleteBoardButton id={boardId}  setAction={setAction}/>
        </>
      </MessageModal>
      }
    </li>
  )
}

function MdiTrashCanOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="w-6 h-auto" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3zM7 6h10v13H7zm2 2v9h2V8zm4 0v9h2V8z"></path></svg>
  )
}