'use client'

import SubMenuContainer from "./SubMenuContainer"
import NavLinkContainer from "./NavBarLinkContainer/NavLinkContainer"
import HomeLink from "./HomeLink"
import UserMenuContainer from "./UserMenu/LoginMenuContainer"
import { useUserContext } from "@/context/UserContext"
import { useEffect, useState } from "react"

export default function Navbar() {
  const { isLogged } = useUserContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLogged) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false)
    }
  }, [isLogged])

  return (
    <nav className="flex items-center justify-between bg-slate-700 p-2">
      <HomeLink />
      {
        isLoggedIn ?
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