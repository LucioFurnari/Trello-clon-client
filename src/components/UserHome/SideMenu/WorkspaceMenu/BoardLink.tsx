import Link from "next/link"

interface OptionMenuProps {
  boardId: string,
  name: string,
  workspaceId: string
}

export default function BoardLink({ boardId, name, workspaceId }: OptionMenuProps) {
  return (
    <ul>
      <li>
        <Link className="block text-left pl-6 py-1 text-zinc-300 hover:bg-slate-500/50" href={`/workspace/${workspaceId}/board/${boardId}`}>{name}</Link>
      </li>
    </ul>
  )
}