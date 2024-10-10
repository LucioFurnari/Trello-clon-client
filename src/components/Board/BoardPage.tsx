import { getBoard } from "@/lib/board"
import { notFound } from "next/navigation";
import ListContainer from "../List/ListContainer";
import ListContextProvider from "@/context/ListContext";
import BoardHeader from "./BoarHeader";


export default async function BoardPage({ params }: { params: { board: string }}) {
  const data = await getBoard(params.board);

  if(!data) {
    notFound();
  }
  return (
    <main style={{
      ...(data.coverImage && {
        backgroundImage: `url(${data.coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }),
      backgroundColor: data.coverColor
        ? data.coverColor
        : 'rgb(59 130 246 / var(--tw-bg-opacity))',
    }}
    className={" bg-blue-500 min-h-[calc(100vh-52px)] overflow-auto"}>
      <BoardHeader title={data.title} />
      <ListContextProvider>
        <ListContainer lists={data.lists} />
      </ListContextProvider>
    </main>
  )
}