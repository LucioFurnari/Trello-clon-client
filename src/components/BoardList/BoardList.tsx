import BoardItem from "./BoardItem"
import CreateBoardButton from "./CreateBoardButton"
import { BoardData } from "@/types/types"

interface BoardListProps {
  boards?: BoardData[],
  workspaceId: string,
  createHandle: (value?: any) => void,
  deleteHandle: (value?: any) => void
}

export default function BoardList({boards,workspaceId, createHandle, deleteHandle}: BoardListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {
        boards &&
        boards.map((board: BoardData) => <BoardItem key={board.boardId} board={board} workspaceId={workspaceId} setAction={deleteHandle}/>)
      }
      <CreateBoardButton workspaceId={workspaceId} setAction={createHandle} />
    </ul>
  )
}