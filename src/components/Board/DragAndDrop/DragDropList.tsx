import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import List from '../List';
import { ListData } from '@/context/ListContext';
import { useListContext } from '@/context/ListContext';

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

export default function DragDroptList() {
  const {list, setList} = useListContext();

  function handleDragDrop(result: DropResult) {
    const { source, destination, type} = result;

    if (!destination) {
      return;
    }

    // if(source.droppableId === destination.droppableId && source.index === destination.index) {
    //   return;
    // }
    if (destination.index === source.index) {
      return;
    }

    if(type === 'group') {
      console.log('testing')
      const reorderList = reorder(list, source.index, destination.index);
      setList(reorderList);
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      <Droppable droppableId="droppable" type='group' direction='horizontal'>
        {(provided) => (
          <div className='flex flex-row' {...provided.droppableProps} ref={provided.innerRef}>
            {
              list.map((item, index) => (
                <Draggable draggableId={item.listId.toString()} index={index} key={item.listId}>
                  {(provided) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}>
                        <List name={item.name} id={item.listId.toString()} cards={[]} />
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