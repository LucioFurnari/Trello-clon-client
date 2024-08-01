import CardLink from "./CardLink"
import AddCardButton from "./Buttons/AddCardButton"
import DeleteListButton from "./Buttons/DeleteListButton"
import { Droppable, Draggable } from "@hello-pangea/dnd"
import { CardData } from "@/context/ListContext"

interface ListProps {
  name: string,
  id: string,
  cards: CardData[]
}

export default function List({ name, cards, id }: ListProps) {

  return (
    <div className="mx-6 p-4 bg-slate-700 w-52 overflow-visible" draggable={true}>
      <h2>{name}</h2>
      <DeleteListButton listId={id} />
      <Droppable droppableId={id} type="card">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="p-4 bg-slate-200 max-h-80 overflow-hidden">
            {
            cards && 
            cards.map((card, index) =>(
              <Draggable draggableId={`card-${card.cardId}`} index={index} key={`card-${card.cardId}`}>
                {(provided) => (
                  <div
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    <CardLink title={card.title} />
                  </div>
                )}
              </Draggable>
            ))
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AddCardButton listId={id} />
    </div>
  )
}