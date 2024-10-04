'use client'

import NavProfileButton from "./NavProfileButton"
import LoginMenu from "./LoginMenu"
import LogoutButton from "./LogoutButton"
import { useState } from "react"

export default function UserMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleOpenMenu() {
    setMenuOpen((value) => !value);
  }

  return (
    <div className="relative">
      <NavProfileButton action={handleOpenMenu}/>
      {/* {
        menuOpen &&
        <LoginMenu />
      } */}
      <LogoutButton />
    </div>
  )
}