'use client'

import SubMenuContainer from "./SubMenuContainer"
import NavLinkContainer from "./NavBarLinkContainer/NavLinkContainer"
import HomeLink from "./HomeLink"
import UserMenuContainer from "./UserMenu/LoginMenuContainer"
import { useUserContext } from "@/context/UserContext"

export default function Navbar() {
  const { user } = useUserContext();

  return (
    <nav className="flex items-center justify-between bg-slate-700 p-2">
      <HomeLink />
      {
        user.loggedIn ?
        <>
          <SubMenuContainer title="Your Workspaces" name={'Workspace'} />
          <UserMenuContainer />
        </>
        :
          <NavLinkContainer />
      }
    </nav>
  )
}