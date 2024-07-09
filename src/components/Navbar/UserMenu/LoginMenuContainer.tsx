'use client'

import NavProfileButton from "./NavProfileButton"
import LoginMenu from "./LoginMenu"
import { useState } from "react"

export default function UserMenuContainer() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleOpenMenu() {
    setMenuOpen((value) => !value);
  }

  return (
    <div className="relative">
      <NavProfileButton action={handleOpenMenu}/>
      {
        menuOpen &&
        <LoginMenu />
      }
    </div>
  )
}