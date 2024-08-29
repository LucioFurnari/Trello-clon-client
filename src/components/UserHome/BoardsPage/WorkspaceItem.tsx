import BoardList from "./BoardList"
import WorkspaceOptions from "@/components/WorkspaceOptions/WorkspaceOptions"
import { BoardData } from "@/types/types"

interface WorkspaceItemProp {
  name: string,
  boards?: BoardData[] | [],
  workspaceId: string
}

export function WorkspaceItem({ name, boards, workspaceId }: WorkspaceItemProp) {
  return (
    <div className="pb-4">
      <h3 className="pb-2 mr-4 text-zinc-100 text-2xl inline-block">{name}</h3>
      <WorkspaceOptions workspaceId={workspaceId} />
      <BoardList boards={boards} workspaceId={workspaceId} />
    </div>
  )
}