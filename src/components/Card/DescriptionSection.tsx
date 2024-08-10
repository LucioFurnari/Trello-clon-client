"use client"

import { useState } from "react"
import TextEditor from "../Editor/TextEditor"

export default function DescriptionSection({ card }: {card: any}) {
  const [openEditor, setOpenEditor] = useState(false);

  return(
    <div className="mt-4">
      <h3 className="mb-2 text-gray-500">Description:</h3>
      {
        card.description &&
        !openEditor ?
        <p onClick={() => setOpenEditor(true)} className="ml-2">{card.description}</p>
        :
        <TextEditor setAction={setOpenEditor} card={card} />
      }
    </div>
  )
}