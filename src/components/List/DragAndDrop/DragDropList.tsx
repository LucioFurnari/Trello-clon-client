import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import List from '../List';
import { ListData } from '@/context/ListContext';
import { CardData } from '@/types/types';
import { useListContext } from '@/context/ListContext';
import { updatePosition } from '@/lib/list';

const reorderList = (list: ListData[], startIndex: number, endIndex: number): ListData[] => {
  // Create copy of the state list.
  const reorderedList = [...list];
  // Get source index.
  const sourceIndex = startIndex;
  // Get destination index.
  const destinationIndex = endIndex;

  // Remove and get element of the copy array.
  const [removedList] = reorderedList.splice(sourceIndex, 1);
  // Put in the element in the index, in the copy array.
  reorderedList.splice(destinationIndex, 0, removedList);

  return reorderedList;
};

function moveCard(
  sourceList: ListData[],
  source: {index: number, droppableId: string},
  destination: {index: number, droppableId: string}
) {
  const sourceListIndex = sourceList.findIndex(list => list.listId === source.droppableId)
  const destListIndex = sourceList.findIndex(list => list.listId === destination.droppableId)

  const sourceCards = [...sourceList[sourceListIndex].cards];
  const destCards = [...sourceList[destListIndex].cards];

  let cardsArr: CardData[] = []

  if (sourceListIndex !== destListIndex) {
    const [movedCard] = sourceCards.splice(source.index, 1);

    const sourceListId = sourceList[destListIndex].listId
    movedCard.listId = sourceListId;

    destCards.splice(destination.index, 0, movedCard);

    sourceList[sourceListIndex].cards = sourceCards;
    sourceList[destListIndex].cards = destCards;
    // return destination cards list changed
    cardsArr = [...destCards]
  } else {
    const [movedCard] = sourceCards.splice(source.index, 1);
    sourceCards.splice(destination.index, 0, movedCard);

    sourceList[sourceListIndex].cards = sourceCards;
    // return source cards list changed
    cardsArr = [...sourceCards];
  }

  return {
    list: [...sourceList],
    cards: cardsArr
  }
}

export default function DragDroptList() {
  const {list, setList} = useListContext();

  async function handleDragDrop(result: DropResult) {
    const { source, destination, type} = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    if(type === 'group') {
      const newList = reorderList(list, source.index, destination.index);
      setList(newList);
      await updatePosition(newList, []);
    } else if (type === 'card') {
      const updatedList = moveCard(list, source, destination);
      setList(updatedList.list);
      await updatePosition(updatedList.list, updatedList.cards);
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      <Droppable droppableId="lists" type='group' direction='horizontal'>
        {(provided) => (
          <div className='flex flex-row' {...provided.droppableProps} ref={provided.innerRef}>
            {
              list.map((item, index) => (
                <Draggable draggableId={`list-${item.listId}`} index={index} key={`list-${item.listId}`}>
                  {(provided) => (
                    <div className=' h-fit'
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}>
                        <List name={item.name} id={item.listId} cards={item.cards} />
                    </div>
                  )
                  }
                </Draggable>
              ))
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};