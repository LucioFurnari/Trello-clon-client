'use client'

import { useState } from "react"
import NavbarButton from "./NavbarButton";
import SubMenu from "./SubMenu";

interface SubMenuContainerProp{
  name: string
}

// Testing placeholder
const list = [
  { title: "Your workspace"}
];

export default function SubMenuContainer({ name }: SubMenuContainerProp) {
  const [ openMenu, setOpenMenu] = useState(false);

  function handleMenu(){
    setOpenMenu((value) => !value)
  }

  return (
    <div>
      <NavbarButton name={name} action={handleMenu} />
      <SubMenu isMenuOpen={openMenu} list={list} />
    </div>
  )
}