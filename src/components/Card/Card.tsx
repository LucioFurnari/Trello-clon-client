"use client"

import Modal from "../Modal/Modal"
import DescriptionSection from "./DescriptionSection";
import DateSection from "./DateSection";
import { getCard } from "@/lib/card"
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { CardData } from "@/types/types";

export default function Card({ cardId }: { cardId: string}) {
  const [card, setCard] = useState<CardData | null>(null);

  useEffect(() => {
    async function handleGetCard() {
      const card = await getCard(cardId);
      if(!card) {
        notFound();
      }
      setCard(card);
    }
    handleGetCard()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Modal>
      {
        card &&
        <div className="card p-4 rounded-lg shadow-md bg-white">
          <h3 className="text-xl font-bold">{card.title}</h3>
          <DateSection card={card} dueDate={card.dueDate || null} />
          <DescriptionSection card={card} />
        </div>
      }
    </Modal>
  )
}