import BoardItem from "./BoardItem"

export default function BoardList({ boards }: { boards?: any }) {
  return (
    <ul>
      {
        boards.map((board: any) => <BoardItem title={board.title} key={board.boardId}/>)
      }
    </ul>
  )
}