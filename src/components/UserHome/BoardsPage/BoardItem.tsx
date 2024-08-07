import Link from "next/link"

interface BoardItemProp {
  title: string,
  boardId: number
}

export default function BoardItem({ title, boardId }: BoardItemProp) {
  return (
    <li className="bg-pink-500 cursor-pointer">
      <Link 
        href={`/board/${boardId}`} 
        className="inline-block w-full pb-14 pt-2 pl-2">
        { title }
      </Link>
    </li>
  )
}

// pb-10 pr-10 pt-2 pl-2
//  h-20 pt-2 pl-2 pr-10