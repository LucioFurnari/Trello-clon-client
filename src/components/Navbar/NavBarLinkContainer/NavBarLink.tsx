import Link from "next/link"

interface NavBarLinkProps {
  link: string,
  name: string
}

export default function NavBarLink({ link, name }: NavBarLinkProps) {
  return (
    <Link className="text-slate-400 p-2 px-4 mr-4 rounded-md bg-sky-800 hover:bg-sky-600 inline-block" href={link}>{name}</Link>
  )
}