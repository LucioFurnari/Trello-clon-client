import BoardPage from "@/components/Board/BoardPage"

export default function Board({ params }: { params: { board: string }}) {
  return (
    <BoardPage params={{
      board: params.board,
    }} />
  )
}