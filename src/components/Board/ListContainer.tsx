import List from "./List"

interface ListContainerProps {
  lists: [],
}

export default function ListContainer({ lists }: ListContainerProps) {
  return (
    <section className="flex flex-row">
      {
        lists &&
        lists.map((item: any) => <List key={item.listId} name={item.name} cards={item.cards} />)
      }
    </section>
  )
}