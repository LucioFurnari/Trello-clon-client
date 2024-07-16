import RegisterForm from "./RegisterForm"

export default function RegisterPage() {
  return (
    <main className="flex flex-col justify-center min-h-[calc(100vh-56px)]">
      <h2 className="mt-8 mx-auto text-3xl">Create account</h2>
      <RegisterForm />
    </main>
  )
}