"use client"

import { useState } from "react"

export default function DescriptionSection({ description }: {description: string | null}) {

  return(
    <div>
      <h3>Description</h3>
      {
        description &&
        <p>{description}</p>
      }
    </div>
  )
}