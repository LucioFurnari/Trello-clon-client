import Link from "next/link"

interface CardProps {
  title: string,
  cardId: string
}

export default function CardLink({title, cardId}: CardProps) {
  return (
    <Link className=" inline-block w-full border-2 border-black hover:bg-slate-400 p-2 rounded-md mb-2" href={`/card/${cardId}`}>{title}</Link>
  )
}