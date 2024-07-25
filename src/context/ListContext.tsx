'use client'

import { createContext, useContext, useState } from "react";

interface ListData {
  listId: number,
  name: string,
  position: number,
  boardId: number
}

type ListContextType = {
  list: ListData[],
  setList: React.Dispatch<React.SetStateAction<ListData>>
}

type ListContextProviderProps = {
  children: React.ReactNode
}

const ListContext = createContext<ListContextType | null>(null)

export default function ListContextProvider({ children }: ListContextProviderProps) {
  const [list, setList] = useState<ListData[]>([]);

  return (
    <ListContext.Provider
      value={{
        list,
        setList
      }}
    >
      {children}
    </ListContext.Provider>
  )
}