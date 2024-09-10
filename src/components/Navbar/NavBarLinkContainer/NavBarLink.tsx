import Link from "next/link"

interface NavBarLinkProps {
  link: string,
  name: string
}

export default function NavBarLink({ link, name }: NavBarLinkProps) {
  return (
    <Link className="text-gray-200 py-2 px-6 mr-4 rounded-md bg-blue-700 hover:bg-blue-600 inline-block" href={link}>{name}</Link>
  )
}