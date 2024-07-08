import SubMenuContainer from "./SubMenuContainer"
import NavBarLink from "./NavBarLink"

export default function Navbar() {
  return (
    <nav className="flex bg-slate-700 p-2">
      <SubMenuContainer title="Your Workspaces" name={'Workspace'} />
      <NavBarLink link={"/login"} name={"Login"} />
      <NavBarLink link={"/register"} name={"Register"} />
    </nav>
  )
}