'use client'

import { loginUser } from "@/lib/auth"
import { useFormState } from "react-dom"
import Fieldset from "../Fieldset"
import { SubmitButton } from "../SubmitButton"
import { useRouter } from "next/navigation"
import { SVGProps, useEffect } from "react"
import { useUserContext } from "@/context/UserContext"

const initialState = {
  errors: [],
  message: '',
  success: false
}

export default function LoginForm() {
  const [state, formAction] = useFormState(loginUser, initialState);
  const router = useRouter();
  const { setIsLogged } = useUserContext();

  useEffect(() => {
    if (state.success) {
      router.replace('/user/boards', { scroll: false });
      setIsLogged(true);
    }
  }, [state.success, state.message, router, setIsLogged]);

  return (
    <form className="flex flex-col mt-8 p-4 w-full md:max-w-2xl" action={formAction}>
      <Fieldset 
        type={"text"} 
        name={"email"} 
        placeholder="Email" 
        errors={state?.errors}
      />
      <Fieldset 
        type={"password"} 
        name={"password"} 
        placeholder="Password" 
        errors={state?.errors}
      />
      <SubmitButton buttonText="Login"/>
      {state.message && (
        <p className="mx-auto mt-4 text-center">{state.message}</p>
      )}
      {state.success && (
        <>
          <p className="text-center text-2xl mt-4">User logged successful</p>
          <p className="text-center">Redirecting to the dashboard</p>
          <MaterialSymbolsCheck />
        </>
      )}
    </form>
  )
}

export function MaterialSymbolsCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="mx-auto w-10 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"></path>
    </svg>
  )
}