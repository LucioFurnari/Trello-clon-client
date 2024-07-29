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
    // Sort array, maybe move it for this file
    const sortedArr = [...lists]
    sortedArr.sort((a: any, b: any) => a.position - b.position)

    setList(sortedArr)
    
  }, [lists, setList]);

  return (
    <section className="flex flex-row">
      {
        list.length > 0 &&
        <DragDropList />
      }
      <AddListButton />
    </section>
  )
}