import BoardList from "../../BoardList/BoardList"
import WorkspaceOptions from "@/components/WorkspaceOptions/WorkspaceOptions"
import WorkspaceLink from "@/components/Workspace/WorkspaceLink"
import { BoardData } from "@/types/types"

interface WorkspaceItemProp {
  name: string,
  boards?: BoardData[] | [],
  workspaceId: string
}

export function WorkspaceItem({ name, boards, workspaceId }: WorkspaceItemProp) {
  return (
    <div className="pb-4">
      <WorkspaceLink name={name} id={workspaceId} />
      <WorkspaceOptions workspaceId={workspaceId} />
      <BoardList boards={boards} workspaceId={workspaceId} />
    </div>
  )
}