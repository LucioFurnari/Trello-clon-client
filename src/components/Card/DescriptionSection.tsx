"use client"

import { useState } from "react"
import TextEditor from "../Editor/TextEditor"

export default function DescriptionSection({ description }: {description: string | null}) {

  return(
    <div>
      <h3>Description</h3>
      {
        description &&
        <p>{description}</p>
      }
      <TextEditor />
    </div>
  )
}