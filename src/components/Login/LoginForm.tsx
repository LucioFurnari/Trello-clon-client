'use client'

import { loginUser } from "@/lib/auth"
import { useFormState } from "react-dom"
import Fieldset from "../Fieldset"

const initialState = {
  errors: [],
  message: ''
}

export default function LoginForm() {
  const [state, formAction] = useFormState(loginUser, initialState);

  return (
    <form className="flex flex-col mt-8 p-4" action={formAction}>
      <Fieldset type={"text"} name={"email"} errors={state?.errors} />
      <Fieldset type={"password"} name={"password"} errors={state?.errors} />
      <button className="py-2 rounded mt-4 bg-blue-700 hover:bg-blue-600 text-white" type="submit">Submit</button>
      <p className="mx-auto mt-4">{state?.message}</p>
    </form>
  )
}