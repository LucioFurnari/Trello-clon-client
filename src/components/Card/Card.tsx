import Modal from "../Modal/Modal"
import DescriptionSection from "./DescriptionSection";
import DateSection from "./DateSection";
import { getCard } from "@/lib/card"

export default async function Card({ cardId }: { cardId: string}) {
  const card = await getCard(cardId);

  return (
    <Modal>
      <div className="card p-4 rounded-lg shadow-md bg-white">
        <h3 className="text-lg font-bold">{card.title}</h3>
        <DateSection dueDate={card.dueDate} />
        <DescriptionSection description={card.description} />
      </div>
    </Modal>
  )
}