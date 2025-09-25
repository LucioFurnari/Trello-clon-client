'use client'

import { registerUser } from "@/lib/auth"
import { SubmitButton } from "../SubmitButton"
import { useFormState } from "react-dom"
import Link from "next/link"
import MessageModal from "../Modal/MessageModal"
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
      <Fieldset 
        type={"text"} 
        name={"username"} 
        placeholder="Username" 
        errors={state?.errors} 
      />
      <Fieldset 
        type={"email"} 
        name={"email"} 
        placeholder="Email" 
        errors={state?.errors} 
      />
      <Fieldset 
        type={"text"} 
        name={"password"} 
        placeholder="Password" 
        errors={state?.errors} 
      />
      <Fieldset 
        type={"text"} 
        name={"confirmPassword"} 
        placeholder="Confirm password" 
        errors={state?.errors} 
      />
      <SubmitButton buttonText="Submit" />
      {/* Remove isLoading spinner here */}
      {!state.success && state.message && (
        <p className="text-center mt-4">{state.message}</p>
      )}
      {state.success && (
        <MessageModal setAction={() => {}}>
          <p className="text-center text-2xl mb-4">{state.message}</p>
          <Link className="bg-blue-600 text-gray-200 p-2 px-8 mx-auto text-center rounded" href={'/login'}>Log in</Link>
        </MessageModal>
      )}
    </form>
  )
}