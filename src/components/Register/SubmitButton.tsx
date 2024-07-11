'use client'

import { useFormStatus } from "react-dom"

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <button type="submit" disabled={pending}>
        Submit
      </button>
      <p>{pending ? 'User created' : ''}</p>
    </>
  )
}