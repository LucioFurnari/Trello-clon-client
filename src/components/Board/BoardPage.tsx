import { getBoard } from "@/lib/board"
import ListContainer from "./ListContainer";
import ListContextProvider from "@/context/ListContext";
import BoardHeader from "./BoarHeader";


export default async function BoardPage({ params }: { params: { board: string }}) {
  const data = await getBoard(params.board);

  return (
    <main className="bg-purple-500 min-h-[calc(100vh-56px)] overflow-auto">
      <BoardHeader title={data.title} />
      <ListContextProvider>
        <ListContainer lists={data.lists} />
      </ListContextProvider>
    </main>
  )
}