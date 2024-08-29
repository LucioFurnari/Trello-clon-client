

interface ButtonProps {
  name: string,
  action: () => void,
}

export default function MenuButton({ name, action }: ButtonProps) {
  return (
    <button className="p-2 text-zinc-300 hover:bg-zinc-600 w-full text-left transition-colors rounded" onClick={action}>
      {name}
    </button>
  )
}