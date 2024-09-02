import Link from "next/link"

interface WorkspaceLinkProps {
  name: string,
  id: string
}

export default function WorkspaceLink({ id, name }: WorkspaceLinkProps) {
  return (
    <Link className="pb-2 mr-4 text-zinc-100 text-2xl inline-block" href={`/workspace/${id}`}>{name}</Link>
  )
}