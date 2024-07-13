import { useUserContext } from "@/context/UserContext"

interface NavProfileButtonProp {
  action: (value: any) => void
}

export default function NavProfileButton({ action }: NavProfileButtonProp) {
  const context = useUserContext();

  return (
    <button onClick={action}>
      { context.user.username}
    </button>
  )
}