'use client'

import NavLinkContainer from "./NavBarLinkContainer/NavLinkContainer"
import HomeLink from "./HomeLink"
import UserMenuContainer from "./UserMenu/LoginMenuContainer"
import { useUserContext } from "@/context/UserContext"

export default function Navbar() {
  const { isLogged } = useUserContext();

  return (
    <nav className="flex items-center justify-between bg-zinc-800 p-2">
      <HomeLink />
      {
        isLogged ?
        <>
          <UserMenuContainer />
        </>
        :
          <NavLinkContainer />
      }
    </nav>
  )
}