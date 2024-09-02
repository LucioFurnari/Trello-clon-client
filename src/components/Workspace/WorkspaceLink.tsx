import Link from "next/link"

interface WorkspaceLinkProps {
  name: string,
  id: string
}

export default function WorkspaceLink({ id, name }: WorkspaceLinkProps) {
  return (
    <Link href={id}>{name}</Link>
  )
}