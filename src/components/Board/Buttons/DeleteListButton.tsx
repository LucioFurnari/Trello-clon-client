'use client'

import { deleteList } from "@/lib/list"
import { useListContext } from "@/context/ListContext"

interface DeleteListButtonProps {
  listId: string,
}

export default function DeleteListButton({ listId }: DeleteListButtonProps) {
  const { list, setList } = useListContext();

  async function handleDeleteList() {
    const res = await deleteList(listId)

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