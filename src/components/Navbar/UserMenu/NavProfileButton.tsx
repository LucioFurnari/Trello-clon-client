import { useUserContext } from "@/context/UserContext"

interface NavProfileButtonProp {
  action: (value: any) => void
}

export default function NavProfileButton({ action }: NavProfileButtonProp) {
  const context = useUserContext();

  return (
    <button className="text-gray-200 text-xl mr-1" onClick={action}>
      { context.user.username}
    </button>
  )
}