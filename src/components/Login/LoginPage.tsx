import LoginForm from "./LoginForm"


export default function LoginPage() {
  return (
    <main className="flex flex-col justify-center min-h-[calc(100vh-56px)]">
      <h2 className="mt-8 mx-auto text-3xl">Login</h2>
      <LoginForm />
    </main>
  )
}