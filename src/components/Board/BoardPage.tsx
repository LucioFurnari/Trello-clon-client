import { getBoard } from "@/lib/board"


export default async function BoardPage({ params }: { params: { board: string }}) {
  const data = await getBoard(params.board);

  console.log(params.board)
  console.log(data)
  return (
    <main className="bg-purple-500 min-h-[calc(100vh-56px)]">
      <h1> This is the board page</h1>
      <h2>The id of the board is: {params.board}</h2>
    </main>
  )
}