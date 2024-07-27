'use client'

import { deleteList } from "@/lib/list"
import { useListContext } from "@/context/ListContext"
import { useParams } from "next/navigation"

interface DeleteListButtonProps {
  listId: string,
}

export default function DeleteListButton({ listId }: DeleteListButtonProps) {
  const { list, setList } = useListContext();
  const params = useParams<{ board: string}>();

  async function handleDeleteList() {
    const res = await deleteList(listId, params.board)

    if (res) {
      setList(list.filter(item => item.listId !== parseInt(listId)))
    }

  }

  return (
    <button onClick={handleDeleteList}>
      Delete card
    </button>
  )
}