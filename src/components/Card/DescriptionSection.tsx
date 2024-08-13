"use client"

import { SetStateAction, useEffect, useState } from "react"
import TextEditor from "../Editor/TextEditor"
import { Delta } from "quill/core";
import DescriptionText from "./DescriptionText";
import { CardData } from "@/types/types";

export default function DescriptionSection({ card }: {card: CardData}) {
  const [openEditor, setOpenEditor] = useState(false);
  const [content, setContent] = useState<Delta>()

  useEffect(() => {
    setContent(card.description)
  }, [])

  return(
    <div className="mt-4">
      <h3 className="mb-2 text-gray-500">Description:</h3>
      {openEditor ? (
        <TextEditor
          setAction={setOpenEditor}
          card={card}
          setContent={setContent}
        />
      ) : (
        <DescriptionText
          delta={content}
          setAction={setOpenEditor}
        />
      )}
    </div>
  )
}