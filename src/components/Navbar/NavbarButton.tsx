import { SVGProps } from "react"

export interface NavbarButtonProps {
  name: string,
  action: (value: any) => void
}

export default function NavbarButton({name, action}: NavbarButtonProps) {
  return (
    <button className="p-2 px-4 text-slate-400 hover:bg-slate-600 transition-colors rounded-md" onClick={action}>
      <span>{name}</span>
      <span><IcOutlineKeyboardArrowDown /></span>
    </button>
  )
}

function IcOutlineKeyboardArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="inline-block mb-1" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"></path></svg>
  )
}