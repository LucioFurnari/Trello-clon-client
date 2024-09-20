import CardLink from "./CardLink"
import AddCardButton from "./Buttons/AddCardButton"
import DeleteListButton from "./Buttons/DeleteListButton"
import { Droppable, Draggable } from "@hello-pangea/dnd"
import { CardData } from "@/types/types"

interface ListProps {
  name: string,
  id: string,
  cards: CardData[]
}

export default function List({ name, cards, id }: ListProps) {

  return (
    <div className="mx-6 p-4 bg-gray-900 w-52 rounded-xl overflow-visible" draggable={true}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-slate-200">{name}</h2>
        <DeleteListButton listId={id} />
      </div>
        <Droppable droppableId={id} type="card">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className={`bg-transparent ${cards.length > 0 ? "py-0" : "py-4 bg-gray-500 rounded"} max-h-80 overflow-hidden`}>
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
                    <CardLink title={card.title} cardId={card.cardId.toString()} />
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