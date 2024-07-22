'use client'

import { loginUser } from "@/lib/auth"
import { useFormState } from "react-dom"
import Fieldset from "../Fieldset"
import { SubmitButton } from "../SubmitButton"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
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
      setIsLogged(true);
      router.replace('/user', { scroll: false })
    }
  }, [state.success, router, setIsLogged]);

  return (
    <form className="flex flex-col mt-8 p-4 w-full md:max-w-2xl" action={formAction}>
      <Fieldset type={"text"} name={"email"} errors={state?.errors} />
      <Fieldset type={"password"} name={"password"} errors={state?.errors} />
      <SubmitButton />
      <p className="mx-auto mt-4">{state?.message}</p>
    </form>
  )
}