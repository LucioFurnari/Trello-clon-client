'use client'

import LinkBoard from "./LinkBoard"
import WorkspaceMenu from "./WorkspaceMenu/WorkspaceMenu"
import { SVGProps, useState } from "react"

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`flex flex-col bg-slate-800 max-w-52 absolute top-13 z-10 md:static md:min-h-screen transition-all h-full ${open ? 'left-0': '-left-52'}`}>
      <LinkBoard />
      <WorkspaceMenu />
      <button onClick={() => setOpen((value:boolean) => !value)} className="absolute top-1 left-52 p-4 bg-slate-700 rounded-r-xl md:hidden">
        {
          open ?
          <IcOutlineArrowBackIos />
          :
          <IcOutlineArrowForwardIos />
        }
      </button>
    </nav>
  )
}

export function IcOutlineArrowForwardIos(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"></path></svg>
  )
}

export function IcOutlineArrowBackIos(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12z"></path></svg>
  )
}