import Link from "next/link"

interface BoardItemProp {
  title: string,
}

export default function BoardItem({ title }: BoardItemProp) {
  return (
    <li className="bg-pink-500 cursor-pointer">
      <Link 
        href={""} 
        className="inline-block pb-14 pt-2 pl-2">
        { title }
      </Link>
    </li>
  )
}

// pb-10 pr-10 pt-2 pl-2
//  h-20 pt-2 pl-2 pr-10