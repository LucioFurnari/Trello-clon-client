import BoardList from "./BoardList"
import { BoardData } from "@/types/types"

interface WorkspaceItemProp {
  name: string,
  boards?: BoardData[] | [],
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