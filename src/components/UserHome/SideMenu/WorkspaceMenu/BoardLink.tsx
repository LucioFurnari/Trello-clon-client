import Link from "next/link"

interface OptionMenuProps {
  boardId: string,
  name: string
}

export default function BoardLink({ boardId, name }: OptionMenuProps) {
  return (
    <ul>
      <li>
        <Link className="block text-center text-zinc-300" href={`/board/${boardId}`}>{name}</Link>
      </li>
    </ul>
  )
}