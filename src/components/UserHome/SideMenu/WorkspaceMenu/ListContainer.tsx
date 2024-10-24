"use client"

import { useState } from "react"
import MenuButton from "./MenuButton"
import SearchUsersContainer from "@/components/Users/SearchUsersContainer"
import Link from "next/link"

interface ListContainerProps {
  name: string,
  id: string
}

export default function ListContainer({ name, id }: ListContainerProps) {
  const [openMenu, setOpenMenu] = useState(false); 

  function handleMenu() {
    setOpenMenu((value: boolean) => !value);
  }

  return (
    <div>
      <MenuButton name={name} action={handleMenu} setValue={openMenu} />
      {
        openMenu &&
        <>
        <SearchUsersContainer  workspaceId={id}/>
        <Link className="text-gray-100 py-2 pl-4 w-full text-left text-sm hover:bg-slate-300/20 inline-block" href={`/user/workspace/${id}`}>Board</Link>
        </>
      }
    </div>
  )
}