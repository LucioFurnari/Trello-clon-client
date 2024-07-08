export interface NavbarButtonProps {
  name: string,
  action: (value: any) => void
}

export default function NavbarButton({name, action}: NavbarButtonProps) {
  return (
    <button className="p-2 px-4 text-slate-400 hover:bg-slate-600 transition-colors rounded-md" onClick={action}>
      {name}
    </button>
  )
}