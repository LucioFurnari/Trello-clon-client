


export default function BoardPage({ params }: { params: { board: string }}) {
  return (
    <main>
      <h1> This is the board page</h1>
      <h2>The id of the board is: {params.board}</h2>
    </main>
  )
}