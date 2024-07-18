

interface ButtonProps {
  name: string,
  action: () => void,
}

export default function MenuButton({ name, action }: ButtonProps) {
  return (
    <button onClick={action}>
      {name}
    </button>
  )
}