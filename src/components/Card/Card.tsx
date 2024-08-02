import Modal from "../Modal/Modal"
import { getCard } from "@/lib/card"

export default async function Card({ cardId }: { cardId: string}) {
  const card = await getCard(cardId);

  return (
    <Modal>
      <h1>{card.title}</h1>
      <p>Card id: {card.cardId}</p>
    </Modal>
  )
}