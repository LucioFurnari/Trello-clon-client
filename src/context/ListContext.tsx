'use client'

import { createContext, useContext, useState } from "react";

export interface ListData {
  listId: string,
  name: string,
  position: number,
  boardId: string,
  cards: CardData[]
}

export interface CardData {
  cardId: string,
  title: string,
  description: string,
  coverColor: string | null,
  coverImage: string | null,
  startDate: string | null,
  dueDate: string | null,
  listId: string
}

type ListContextType = {
  list: ListData[],
  setList: React.Dispatch<React.SetStateAction<ListData[]>>
}

type ListContextProviderProps = {
  children: React.ReactNode
}

// default value for the context
const defaultValue: ListContextType = {
  list: [],
  setList: () => []
};

const ListContext = createContext<ListContextType>(defaultValue);

export default function ListContextProvider({ children }: ListContextProviderProps) {
  const [list, setList] = useState<ListData[]>([]);

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  )
}

export function useListContext() {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error(
      "useListContext must be used within a ListContextProvider"
    );
  }
  return context;
}