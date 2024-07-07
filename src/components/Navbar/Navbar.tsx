import SubMenuContainer from "./SubMenuContainer"

export default function Navbar() {
  return (
    <nav className="flex bg-slate-700">
      <SubMenuContainer name={'Workspace'} />
    </nav>
  )
}