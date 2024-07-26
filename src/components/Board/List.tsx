import Card from "./Card"
import AddCardButton from "./Buttons/AddCardButton"
import DeleteListButton from "./Buttons/DeleteListButton"

interface ListProps {
  name: string,
  id: string,
  cards: []
}

export default function List({ name, cards, id }: ListProps) {
  return (
    <div className="mx-6 p-4 bg-slate-700 w-52" draggable={true}>
      <h2>{name}</h2>
      <DeleteListButton listId={id} />
      {
        cards && 
        cards.map((item: any) => <Card key={item.cardId} title={item.title} /> )
      }
      <AddCardButton />
    </div>
  )
}