
import { deleteBoard } from "@/lib/board"

interface DeleteBoardButtonProps {
  id: string,
  setAction: (value?: any) => void
}

export default function DeleteBoardButton({id, setAction}: DeleteBoardButtonProps) {

  async function handleDeleteBoard() {
    const res = await deleteBoard(id);

    if (!res) {
      return
    }
    setAction(id);
  }

  return (
    <button onClick={handleDeleteBoard} className="bg-red-600 hover:bg-red-500 rounded p-2 px-8 text-lg mx-auto mt-4">Delete board</button>
  )
}