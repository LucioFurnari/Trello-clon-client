'use client'

import List from "./List"
import AddListButton from "./Buttons/AddListButton"
import { useEffect, useState } from "react"
import { useListContext } from "@/context/ListContext"

interface ListContainerProps {
  lists: [],
}

export default function ListContainer({ lists }: ListContainerProps) {
  const { setList, list } = useListContext();

  useEffect(() => {
    setList(lists)
  }, [lists, setList]);

  return (
    <section className="flex flex-row">
      {
        list.length > 0 &&
        list.map((item: any) => <List key={item.listId} name={item.name} cards={item.cards} />)
      }
      {/* <AddListButton /> */}
    </section>
  )
}