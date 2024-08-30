import LinkBoard from "./LinkBoard"
import WorkspaceMenu from "./WorkspaceMenu/WorkspaceMenu"

export default function SideMenu() {
  return (
    <nav className="flex flex-col max-w-60">
      <LinkBoard />
      <WorkspaceMenu />
    </nav>
  )
}