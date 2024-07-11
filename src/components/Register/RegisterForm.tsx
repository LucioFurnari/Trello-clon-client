'use client'

import { registerUser } from "@/lib/auth"
import { SubmitButton } from "./SubmitButton"
import { useFormState } from "react-dom"

const initialState = {
  success: false,
  message: ''
}

export default function RegisterForm() {
  const [state, formAction] = useFormState(registerUser, initialState)


  return (
    <form action={formAction}>
      <input type="text"  name="username"  id="username" placeholder="username" required/>
      <input type="email" name="email"     id="email"    placeholder="email"    required/>
      <input type="text"  name="password"  id="password" placeholder="password" required/>
      <SubmitButton />
      {
        state?.success &&
        <p>{state.message}</p>
      }
    </form>
  )
}