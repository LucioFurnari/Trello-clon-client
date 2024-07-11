
interface LoginFormProp {
  formAction: (formData: FormData) => Promise<void>,
}

export default function LoginForm({ formAction }: LoginFormProp) {
  return (
    <form action={formAction}>
      <input type="text" placeholder="email" name="email" id="email" />
      <input type="text" placeholder="password" name="password" id="password" />
      <button type="submit">Submit</button>
    </form>
  )
}