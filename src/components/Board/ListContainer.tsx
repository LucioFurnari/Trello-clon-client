'use client'

import AddListButton from "./Buttons/AddListButton"
import { useEffect } from "react"
import { useListContext } from "@/context/ListContext"
import DragDropList from "./DragAndDrop/DragDropList"

interface ListContainerProps {
  lists: any,
}

export default function ListContainer({ lists }: ListContainerProps) {
  const { setList } = useListContext();

  useEffect(() => {
    // Sort array, maybe move it for this file
    if (lists.length > 0) {
      const sortedArr = lists
      sortedArr.sort((a: any, b: any) => a.position - b.position)
      setList(sortedArr); 
    }
  }, []);

  return (
    <section className="flex flex-row">
      {
        <DragDropList />
      }
      <AddListButton />
    </section>
  )
}