import { WorkspaceType } from "@/types/types"
import WorkspaceLink from "./WorkspaceLink"
import WorkspaceOptions from "../WorkspaceOptions/WorkspaceOptions"

interface WorkspaceHeaderProps {
  workspaceId: string,
  workspace: WorkspaceType,
}

export default function WorkItemHeader ({ workspaceId, workspace }: WorkspaceHeaderProps) {
  return (
    <div className="flex flex-row items-center mb-2">
      <WorkspaceLink name={workspace.name} id={workspaceId} />
      <WorkspaceOptions workspaceId={workspaceId} workspace={workspace} />
    </div>
  )
}