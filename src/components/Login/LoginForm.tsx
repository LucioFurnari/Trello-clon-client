import { loginUser } from "@/lib/auth"

export default function LoginForm() {
  return (
    <form action={loginUser}>
      <input type="text" placeholder="email" name="email" id="email" />
      <input type="text" placeholder="password" name="password" id="password" />
      <button type="submit">Submit</button>
    </form>
  )
}