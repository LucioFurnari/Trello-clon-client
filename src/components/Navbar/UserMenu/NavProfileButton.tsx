
interface NavProfileButtonProp {
  action: (value: any) => void
}

export default function NavProfileButton({ action }: NavProfileButtonProp) {
  return (
    <button onClick={action}>
      Profile
    </button>
  )
}