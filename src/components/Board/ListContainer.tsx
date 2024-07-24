'use client'

import List from "./List"
import AddListButton from "./Buttons/AddListButton"
import { useEffect, useState } from "react"

interface ListContainerProps {
  lists: [],
}

export default function ListContainer({ lists }: ListContainerProps) {
  const [listArray, setListArray] = useState([])

  useEffect(() => {
    setListArray(lists)
  }, [lists]);

  return (
    <section className="flex flex-row">
      {
        listArray &&
        listArray.map((item: any) => <List key={item.listId} name={item.name} cards={item.cards} />)
      }
      <AddListButton setAction={setListArray} />
    </section>
  )
}