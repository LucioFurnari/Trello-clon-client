'use client'

import { registerUser } from "@/lib/auth"
import { SubmitButton } from "../SubmitButton"
import { useFormState } from "react-dom"
import Link from "next/link"
import MessageModal from "../Modal/MessageModal"
import Fieldset from "../Fieldset"
import { useState, useEffect } from "react"

const initialState = {
  success: false,
  message: '',
  errors: []
}

export default function RegisterForm() {
  const [state, formAction] = useFormState(registerUser, initialState)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (state.success || state.message) {
      setIsLoading(false)
    }
  }, [state.success, state.message])

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)
    await formAction(formData)
  }

  return (
    <form className="flex flex-col mt-8 p-4 w-full md:max-w-2xl" action={handleSubmit}>
      <Fieldset 
        type={"text"} 
        name={"username"} 
        placeholder="Username" 
        errors={state?.errors} 
        disabled={isLoading}
      />
      <Fieldset 
        type={"email"} 
        name={"email"} 
        placeholder="Email" 
        errors={state?.errors} 
        disabled={isLoading}
      />
      <Fieldset 
        type={"text"} 
        name={"password"} 
        placeholder="Password" 
        errors={state?.errors} 
        disabled={isLoading}
      />
      <Fieldset 
        type={"text"} 
        name={"confirmPassword"} 
        placeholder="Confirm password" 
        errors={state?.errors} 
        disabled={isLoading}
      />
      <SubmitButton disabled={isLoading} />
      {isLoading && (
        <div className="flex justify-center mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      {!isLoading && !state.success && state.message && (
        <p className="text-center mt-4">{state.message}</p>
      )}
      {!isLoading && state.success && (
        <MessageModal setAction={() => {}}>
          <p className="text-center text-2xl mb-4">{state.message}</p>
          <Link className="bg-blue-600 text-gray-200 p-2 px-8 mx-auto text-center rounded" href={'/login'}>Log in</Link>
        </MessageModal>
      )}
    </form>
  )
}