import SubMenuContainer from "./SubMenuContainer"
import NavBarLink from "./NavBarLink"

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-slate-700 p-2">
      <SubMenuContainer title="Your Workspaces" name={'Workspace'} />
      <div>
        <NavBarLink link={"/"} name={"Home"} />
        <NavBarLink link={"/login"} name={"Login"} />
        <NavBarLink link={"/register"} name={"Register"} />
      </div>
    </nav>
  )
}