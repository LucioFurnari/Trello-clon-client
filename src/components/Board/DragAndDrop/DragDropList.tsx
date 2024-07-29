import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import List from '../List';
import { ListData } from '@/context/ListContext';
import { useListContext } from '@/context/ListContext';
import { updatePosition } from '@/lib/list';

const reorder = (list: ListData[], startIndex: number, endIndex: number): ListData[] => {
  console.log(startIndex, endIndex)
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
  source: { index: number,droppableId: string},
  destination: { index: number, droppableId: string}
) {
  const sourceListIndex = sourceList.findIndex(list => list.listId === parseInt(source.droppableId))
  const destListIndex = sourceList.findIndex(list => list.listId === parseInt(destination.droppableId))

  const sourceCards = [...sourceList[sourceListIndex].cards];
  const destCards = [...sourceList[destListIndex].cards];

  const [movedCard] = sourceCards.splice(source.index, 1)
  destCards.splice(destination.index, 0, movedCard);

  sourceList[sourceListIndex].cards = sourceCards;
  sourceList[destListIndex].cards = destCards;

  return [...sourceList]
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
      // const reorderList = reorder(list, source.index, destination.index);
      const reorderList = reorder(list, source.index, destination.index);
      setList(reorderList);
      await updatePosition(reorderList);
    } else if (type === 'card') {
      const updatedList = moveCard(list, source, destination);
      setList(updatedList);
      // await updatePosition(updatedList);
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
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}>
                        <List name={item.name} id={item.listId.toString()} cards={item.cards} />
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