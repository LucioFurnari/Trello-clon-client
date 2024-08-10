import Modal from "../Modal/Modal"
import DescriptionSection from "./DescriptionSection";
import DateSection from "./DateSection";
import { getCard } from "@/lib/card"
import { notFound } from "next/navigation";

export default async function Card({ cardId }: { cardId: string}) {
  const card = await getCard(cardId);

  console.log(card)
  if(!card) {
    notFound();
  }
  return (
    <Modal>
      <div className="card p-4 rounded-lg shadow-md bg-white">
        <h3 className="text-xl font-bold">{card.title}</h3>
        <DateSection dueDate={card.dueDate} />
        <DescriptionSection card={card} />
      </div>
    </Modal>
  )
}