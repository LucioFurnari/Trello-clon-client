'use client'

import { createContext, useContext, useState } from "react";

interface ListData {
  listId: number,
  name: string,
  position: number,
  boardId: number,
  cards: CardData[]
}

interface CardData {
  cardId: number,
  title: string,
  description: string,
  coverColor: string | null,
  coverImage: string | null,
  startDate: string | null,
  dueDate: string | null,
  listId: number
}

type ListContextType = {
  list: ListData[],
  setList: React.Dispatch<React.SetStateAction<ListData[] | []>>
}

type ListContextProviderProps = {
  children: React.ReactNode
}

// default value for the context
const defaultValue: ListContextType = {
  list: [],
  setList: () => []
};

const ListContext = createContext<ListContextType>(defaultValue)

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


export function useListContext() {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error(
      "useUserContext must be used within a UserContextProvider"
    );
  }
  return context;
}