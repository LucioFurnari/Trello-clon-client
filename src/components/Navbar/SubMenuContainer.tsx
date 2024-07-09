'use client'

import { useState } from "react"
import NavbarButton from "./NavbarButton";
import SubMenu from "./SubMenu";

interface SubMenuContainerProp{
  title?: string,
  name: string
}

// Testing placeholder
const list = [
  { title: "Workspace"},
  { title: "Project"},
  { title: "Game"}
];

export default function SubMenuContainer({ name, title }: SubMenuContainerProp) {
  const [ openMenu, setOpenMenu] = useState(false);

  function handleMenu(){
    setOpenMenu((value) => !value)
  }

  return (
    <div className="relative">
      <NavbarButton name={name} action={handleMenu} />
      <SubMenu title={title} isMenuOpen={openMenu} list={list} />
    </div>
  )
}