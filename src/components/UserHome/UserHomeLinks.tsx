import Link from "next/link";

interface UserHomeLinkProps {
  name: string
  route: string
}

export default function UserHomeLink({ name, route }: UserHomeLinkProps) {
  return (
    <Link href={route}>{name}</Link>
  )
}