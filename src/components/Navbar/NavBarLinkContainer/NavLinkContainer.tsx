import NavBarLink from "./NavBarLink"

export default function NavLinkContainer() {
  return (
    <div>
      <NavBarLink link={"/login"} name={"Login"} />
      <NavBarLink link={"/register"} name={"Register"} />
    </div>
  )
}