'use client'

import { useState } from "react"
import NavbarButton from "./NavbarButton";
import SubMenu from "./SubMenu";

interface SubMenuContainerProp{
  name: string
}

export default function SubMenuContainer({ name }: SubMenuContainerProp) {
  const [ openMenu, setOpenMenu] = useState(false);

  function handleMenu(){
    setOpenMenu((value) => !value)
  }

  return (
    <div>
      <NavbarButton name={name} action={handleMenu} />
      <SubMenu isMenuOpen={openMenu} />
    </div>
  )
}