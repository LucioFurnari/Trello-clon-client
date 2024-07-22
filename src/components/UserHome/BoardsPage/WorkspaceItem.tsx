import BoardList from "./BoardList"

interface WorkspaceItemProp {
  name: string,
  boards?: []
}

export function WorkspaceItem({ name, boards }: WorkspaceItemProp) {
  return (
    <div className="pb-4">
      <h3 className="pb-2 text-zinc-200">{name}</h3>
      <BoardList boards={boards} />
    </div>
  )
}