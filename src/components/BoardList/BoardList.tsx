import BoardItem from "./BoardItem"
import CreateBoardButton from "./CreateBoardButton"

interface BoardListProps {
  boards?: any,
  workspaceId: string,
  createHandle: (value?: any) => void,
  deleteHandle: (value?: any) => void
}

export default function BoardList({boards,workspaceId, createHandle, deleteHandle}: BoardListProps) {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {
        boards &&
        boards.map((board: any) => <BoardItem title={board.title} key={board.boardId} boardId={board.boardId} workspaceId={workspaceId} setAction={deleteHandle}/>)
      }
      <CreateBoardButton workspaceId={workspaceId} setAction={createHandle} />
    </ul>
  )
}