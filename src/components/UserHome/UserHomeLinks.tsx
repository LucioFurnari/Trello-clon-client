import Link from "next/link";

interface UserHomeLinkProps {
  name: string
  route: string
}

export default function UserHomeLink({ name, route }: UserHomeLinkProps) {
  return (
    <Link className="inline-block p-2 text-zinc-300 hover:bg-zinc-600 transition-colors rounded" href={route}>{name}</Link>
  )
}