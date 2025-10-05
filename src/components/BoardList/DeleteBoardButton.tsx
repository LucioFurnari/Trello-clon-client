
import { deleteBoard } from "../../lib/board"

type DeleteBoardButtonProps = {
  id: string,
}

export default function DeleteBoardButton({ id }: DeleteBoardButtonProps) {

  return (
    <button onClick={() => deleteBoard(id)} className="bg-red-600 hover:bg-red-500 rounded p-2 px-8 text-lg mx-auto mt-4">Delete board</button>
  )
}