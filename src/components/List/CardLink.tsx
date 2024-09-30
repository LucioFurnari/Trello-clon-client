import Link from "next/link"
import { CardData } from "@/types/types"

interface CardProps {
  card: CardData
}

export default function CardLink({ card }: CardProps) {

  const isOverdue = card.dueDate ? new Date(card.dueDate) < new Date() : false;
  
  const daysLeft = card.dueDate
    ? Math.ceil((new Date(card.dueDate).getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000))
    : null;
  
  const isDueSoon = daysLeft !== null && daysLeft < 2 && daysLeft >= 0;

  return (
    <Link
    className={`${card.dueDate &&  isOverdue
      ? 'bg-red-600'
      : isDueSoon
      ? 'bg-yellow-500'
      : 'bg-gray-500'} inline-block w-full bg-gray-500 text-slate-200 hover:bg-slate-400 p-2 rounded-md mb-4`}
    href={`/card/${card.cardId}`}>
      {card.title}
    </Link>
  )
}