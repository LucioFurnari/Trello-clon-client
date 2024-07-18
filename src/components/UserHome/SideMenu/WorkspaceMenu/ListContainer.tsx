"use client"

import { useState } from "react"
import MenuButton from "./MenuButton"
import OptionMenu from "./OptionsMenu"

interface ListContainerProps {
  name: string,
}

export default function ListContainer({ name }: ListContainerProps) {
  const [openMenu, setOpenMenu] = useState(false); 

  function handleMenu() {
    setOpenMenu((value: boolean) => !value);
  }

  return (
    <div>
      <MenuButton name={name} action={handleMenu} />
      {
        openMenu &&
        <OptionMenu />
      }
    </div>
  )
}