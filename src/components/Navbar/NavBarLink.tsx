import Link from "next/link"

interface NavBarLinkProps {
  link: string,
  name: string
}

export default function NavBarLink({ link, name }: NavBarLinkProps) {
  return (
    <Link href={link}>{name}</Link>
  )
}