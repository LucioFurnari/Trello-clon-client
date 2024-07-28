'use client'

import AddListButton from "./Buttons/AddListButton"
import { useEffect } from "react"
import { useListContext } from "@/context/ListContext"
import DragDropList from "./DragAndDrop/DragDropList"

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
        <DragDropList />
      }
      {/* {
        list.length > 0 &&
        list.map((item: any) => <List key={item.position} name={item.name} cards={item.cards} id={item.listId}/>)
      } */}
      <AddListButton />
    </section>
  )
}