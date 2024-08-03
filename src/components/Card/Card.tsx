import Modal from "../Modal/Modal"
import DescriptionSection from "./DescriptionSection";
import { getCard } from "@/lib/card"

export default async function Card({ cardId }: { cardId: string}) {
  const card = await getCard(cardId);

  return (
    <Modal>
      <article className="p-4">
        <h1>{card.title}</h1>
        <p>Card id: {card.cardId}</p>
        <DescriptionSection description={card.description} />
      </article>
    </Modal>
  )
}