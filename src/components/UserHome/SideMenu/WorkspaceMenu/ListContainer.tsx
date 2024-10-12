"use client"

import { useState } from "react"
import MenuButton from "./MenuButton"
import BoardLink from "./BoardLink"
import { BoardData } from "@/types/types"
import SearchUsersContainer from "@/components/Users/SearchUsersContainer"

interface ListContainerProps {
  name: string,
  boards: BoardData[]
}

export default function ListContainer({ name, boards }: ListContainerProps) {
  const [openMenu, setOpenMenu] = useState(false); 

  function handleMenu() {
    setOpenMenu((value: boolean) => !value);
  }

  return (
    <div>
      <MenuButton name={name} action={handleMenu} setValue={openMenu} />
      {
        openMenu &&
        boards &&
        <>
        {
          boards.map((board, index) => {
            return (
              <BoardLink key={index} boardId={board.boardId} name={board.title}/> 
            )
          })
        }
        <SearchUsersContainer />
        </>
      }
    </div>
  )
}