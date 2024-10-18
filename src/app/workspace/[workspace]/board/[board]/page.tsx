import BoardPage from "@/components/Board/BoardPage"

export default function Board({ params }: { params: { workspace: string, board: string }}) {
  return (
    <BoardPage params={{
      workspace: params.workspace,
      board: params.board,
    }} />
  )
}