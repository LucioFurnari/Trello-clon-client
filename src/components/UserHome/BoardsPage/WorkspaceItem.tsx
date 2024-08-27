import BoardList from "./BoardList"

interface WorkspaceItemProp {
  name: string,
  boards?: [],
  workspaceId: string
}

export function WorkspaceItem({ name, boards, workspaceId }: WorkspaceItemProp) {
  return (
    <div className="pb-4">
      <h3 className="pb-2 text-zinc-100 text-2xl">{name}</h3>
      <BoardList boards={boards} workspaceId={workspaceId} />
    </div>
  )
}