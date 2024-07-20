import BoardList from "./BoardList"

interface WorkspaceItemProp {
  name: string,
  boards?: []
}

export function WorkspaceItem({ name, boards }: WorkspaceItemProp) {
  return (
    <div>
      <h3>{name}</h3>
      <BoardList boards={boards} />
    </div>
  )
}