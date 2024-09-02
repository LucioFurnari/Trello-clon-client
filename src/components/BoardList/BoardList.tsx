import BoardItem from "./BoardItem"
import CreateBoardButton from "./CreateBoardButton"

export default function BoardList({ boards, workspaceId }: { boards?: any, workspaceId: string }) {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {
        boards &&
        boards.map((board: any) => <BoardItem title={board.title} key={board.boardId} boardId={board.boardId}/>)
      }
      <CreateBoardButton workspaceId={workspaceId} />
    </ul>
  )
}