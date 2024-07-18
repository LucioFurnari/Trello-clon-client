import Link from "next/link";

interface SideMenuLinkProps {
  name: string
  route: string
}

export default function SideMenuLink({ name, route }: SideMenuLinkProps) {
  return (
    <Link className="inline-block p-2 text-zinc-300 hover:bg-zinc-600 transition-colors rounded" href={route}>{name}</Link>
  )
}