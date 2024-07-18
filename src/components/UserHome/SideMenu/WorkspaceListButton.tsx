

interface ButtonProps {
  name: string,
  action: () => void,
}

export default function WorkspacesListButton({ name, action }: ButtonProps) {
  return (
    <button onClick={action}>
      {name}
    </button>
  )
}