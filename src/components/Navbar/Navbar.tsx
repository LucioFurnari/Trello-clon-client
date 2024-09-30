'use client'

import NavLinkContainer from "./NavBarLinkContainer/NavLinkContainer"
import HomeLink from "./HomeLink"
import UserMenu from "./UserMenu/UserMenu"
import { useUserContext } from "@/context/UserContext"

export default function Navbar() {
  const { isLogged } = useUserContext();

  return (
    <nav className="flex items-center justify-between bg-zinc-800 p-2 px-10">
      <HomeLink />
      {
        isLogged ?
        <>
          <UserMenu/>
        </>
        :
          <NavLinkContainer />
      }
    </nav>
  )
}