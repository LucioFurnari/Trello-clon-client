'use client'

import { deleteList } from "@/lib/list"
import { useListContext } from "@/context/ListContext"
import { useParams } from "next/navigation"
import MessageModal from "@/components/Modal/MessageModal"
import { SVGProps, useState } from "react"

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
      setList(list.filter(item => item.listId !== listId))
      setOpenModal(false);
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
      <button className="fill-white hover:fill-red-400 transition-colors p-2 rounded" onClick={handleOpenModal}>
        <MdiTrashCanOutline />
      </button>
    </div>
  )
}

function MdiTrashCanOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="w-6 h-auto" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" {...props}><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3zM7 6h10v13H7zm2 2v9h2V8zm4 0v9h2V8z"></path></svg>
  )
}