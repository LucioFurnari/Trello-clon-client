"use client"

import Link from "next/link"
import MessageModal from "@/components/Modal/MessageModal"
import DeleteBoardButton from "./DeleteBoardButton"
import { SVGProps, useState } from "react"
import { BoardData } from "@/types/types"

interface BoardItemProp {
  board: BoardData,
  setAction: (value: any) => void,
  workspaceId: string
}

export default function BoardItem({ board, setAction, workspaceId }: BoardItemProp) {
  const {boardId, title, coverImage, coverColor} = board;
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);
  return (
    <li style={{
      ...(coverImage && {
        backgroundImage: `url(${coverImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }),
      backgroundColor: coverColor
        ? coverColor
        : 'rgb(59 130 246 / var(--tw-bg-opacity))',
    }}
      className={'cursor-pointer relative rounded min-h-28 drop-shadow-xl'}>
      <Link 
        href={`/workspace/${workspaceId}/board/${boardId}`} 
        className="inline-block w-full h-full pt-2 pl-2 hover:bg-white/20 text-white font-semibold">
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
    <svg className="w-6 h-auto fill-white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" {...props}><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3zM7 6h10v13H7zm2 2v9h2V8zm4 0v9h2V8z"></path></svg>
  )
}