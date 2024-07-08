import SubMenuContainer from "./SubMenuContainer"

export default function Navbar() {
  return (
    <nav className="flex bg-slate-700 p-2">
      <SubMenuContainer name={'Workspace'} />
    </nav>
  )
}