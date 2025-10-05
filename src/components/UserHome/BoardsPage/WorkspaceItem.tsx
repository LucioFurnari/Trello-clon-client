import BoardList from "../../BoardList/BoardList"
import { BoardData } from "@/types/types"
import { WorkspaceType } from "@/types/types"
import WorkItemHeader from "@/components/Workspace/WorkItemHeader"

interface WorkspaceItemProp {
  workspace: WorkspaceType,
  boards?: BoardData[] | [],
  workspaceId: string
}

export function WorkspaceItem({ boards, workspaceId, workspace }: WorkspaceItemProp) {

  return (
    <div className="pb-4">
      <WorkItemHeader workspaceId={workspaceId} workspace={workspace} />
      <BoardList boards={boards} workspaceId={workspaceId}/>
    </div>
  )
}