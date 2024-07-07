interface NavbarButtonProps {
  name: string,
}

export default function NavbarButton({name}: NavbarButtonProps) {
  return (
    <button className="p-2">
      {name}
    </button>
  )
}