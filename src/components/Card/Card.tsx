"use client"

import { CardData } from "@/types/types"
import Modal from "../Modal/Modal"
import { useEffect, useState } from "react"
import { getCard } from "@/lib/card"
import { useParams } from "next/navigation"

export default function Card() {
  const params = useParams<{ card: string; }>();
  const [card, setCard] = useState({title: '', cardId: ''});

  useEffect(() => {
    async function handleGetCard() {
      const data = await getCard(params.card);

      setCard(data);
    }
    handleGetCard();
  }, [params.card])

  return (
    <Modal>
      <h1>{card.title}</h1>
      <p>Card id: {card.cardId}</p>
    </Modal>
  )
}