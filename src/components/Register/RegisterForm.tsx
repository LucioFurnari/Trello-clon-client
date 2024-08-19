'use client'

import { registerUser } from "@/lib/auth"
import { SubmitButton } from "../SubmitButton"
import { useFormState } from "react-dom"
import Fieldset from "../Fieldset"

const initialState = {
  success: false,
  message: '',
  errors: []
}

export default function RegisterForm() {
  const [state, formAction] = useFormState(registerUser, initialState)


  return (
    <form className="flex flex-col mt-8 p-4 w-full md:max-w-2xl" action={formAction}>
      <Fieldset type={"text"} name={"username"} errors={state?.errors} />
      <Fieldset type={"email"} name={"email"} errors={state?.errors} />
      <Fieldset type={"text"} name={"password"} errors={state?.errors} />
      <SubmitButton />
      {
        state?.success &&
        <p>{state.message}</p>
      }
      {
        !state?.success &&
        <p>{state.message}</p>
      }
    </form>
  )
}