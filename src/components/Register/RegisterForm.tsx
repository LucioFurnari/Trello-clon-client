import { registerUser } from "@/lib/auth"
import { SubmitButton } from "./SubmitButton"

export default function RegisterForm() {

  return (
    <form action={registerUser}>
      <input type="text"  name="username"  id="username" placeholder="username" required/>
      <input type="email" name="email"     id="email"    placeholder="email"    required/>
      <input type="text"  name="password"  id="password" placeholder="password" required/>
      <SubmitButton />
    </form>
  )
}