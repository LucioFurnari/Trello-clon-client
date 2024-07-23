import Card from "./Card"

interface ListProps {
  name: string,
  cards: []
}

export default function List({ name, cards }: ListProps) {
  return (
    <div className="mx-6 p-4 bg-slate-700 w-52">
      <h2>{name}</h2>
      {
        cards && 
        cards.map((item: any) => <Card key={item.cardId} title={item.title} /> )
      }
    </div>
  )
}