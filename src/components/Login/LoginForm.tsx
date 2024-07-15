'use client'

import { loginUser } from "@/lib/auth"
import { useFormState } from "react-dom"

const initialState = {
  errors: [],
}

export default function LoginForm() {
  const [state, formAction] = useFormState(loginUser, initialState);

  return (
    <form className="flex flex-col mt-8 p-4" action={formAction}>
      <input className="p-2 mt-3 border-b-2" type="text" placeholder="email" name="email" id="email" />
      { 
        state?.errors
          .filter((error: any) => error.path === 'email')
          .map((error: any, index: number) => (
            <span key={index}>{error.msg}</span>
          )) 
      }
      <input className="p-2 mt-3 border-b-2" type="text" placeholder="password" name="password" id="password" />
      { 
        state?.errors
          .filter((error: any) => error.path === 'password')
          .map((error: any, index: number) => (
            <span key={index}>{error.msg}</span>
          )) 
      }
      <button className="py-2 rounded mt-4 bg-blue-700 hover:bg-blue-600 text-white" type="submit">Submit</button>
    </form>
  )
}