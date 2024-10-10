import { SVGProps } from "react"

interface ButtonProps {
  name: string,
  setValue: boolean,
  action: () => void,
}

export default function MenuButton({ name, action, setValue }: ButtonProps) {
  return (
    <button className="flex justify-between items-center p-2 text-zinc-300 hover:bg-zinc-600 text-left transition-colors rounded w-full" onClick={action}>
      <span className=" truncate">{name}</span>
      {
        !setValue ?
        <MaterialSymbolsLightKeyboardArrowDownRounded />
        :
        <MaterialSymbolsLightKeyboardArrowUp />
      }
    </button>
  )
}

export function MaterialSymbolsLightKeyboardArrowDownRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="w-6 h-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M12 14.379q-.161 0-.298-.053t-.267-.184L7.046 9.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 13.292l4.246-4.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354l-4.389 4.388q-.13.131-.267.184q-.136.053-.298.053"></path>
    </svg>
  )
}

export function MaterialSymbolsLightKeyboardArrowUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="w-6 h-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="m12 10.108l-4.6 4.6L6.692 14L12 8.692L17.308 14l-.708.708z"></path>
    </svg>
  )
}