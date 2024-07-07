export interface NavbarButtonProps {
  name: string,
  action: (value: any) => void
}

export default function NavbarButton({name, action}: NavbarButtonProps) {
  return (
    <button className="p-2" onClick={action}>
      {name}
    </button>
  )
}