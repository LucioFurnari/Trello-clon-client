import { getBoard } from "@/lib/board"
import ListContainer from "./ListContainer";
import ListContextProvider from "@/context/ListContext";


export default async function BoardPage({ params }: { params: { board: string }}) {
  const data = await getBoard(params.board);

  return (
    <main className="bg-purple-500 min-h-[calc(100vh-56px)] overflow-auto">
      <h1>The board name: {data.title}</h1>
      <h2>The id of the board is: {params.board}</h2>
      <ListContextProvider>
        <ListContainer lists={data.lists} />
      </ListContextProvider>
    </main>
  )
}