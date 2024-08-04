import Link from "next/link"

interface CardProps {
  title: string,
  cardId: string
}

export default function CardLink({title, cardId}: CardProps) {
  return (
    <Link className="inline-block w-full bg-gray-500 text-slate-200 hover:bg-slate-400 p-2 rounded-md mb-4" href={`/card/${cardId}`}>{title}</Link>
  )
}