import LinkBoard from "./LinkBoard"
import WorkspaceMenu from "./WorkspaceMenu/WorkspaceMenu"
import WorkspaceContextProvider from "@/context/WorkspaceContext"

export default function SideMenu() {
  return (
    <WorkspaceContextProvider>
      <nav className="flex flex-col max-w-60">
        <LinkBoard />
        <WorkspaceMenu />
      </nav>
    </WorkspaceContextProvider>
  )
}