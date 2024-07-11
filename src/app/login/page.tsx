import { loginUser } from "@/lib/auth"
import LoginForm from "@/components/Login/LoginForm"

export default function Login() {
  return (
    <main>
      <h1>Login page</h1>
      <LoginForm formAction={loginUser} />
    </main>
  )
}