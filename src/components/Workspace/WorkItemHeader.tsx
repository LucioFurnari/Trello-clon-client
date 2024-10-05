import { WorkspaceType } from "@/types/types"
import WorkspaceLink from "./WorkspaceLink"
import WorkspaceOptions from "../WorkspaceOptions/WorkspaceOptions"

interface WorkspaceHeaderProps {
  workspaceId: string,
  workspace: WorkspaceType,
  handleDelete: (elem?: any) => void,
  handleEdit: (id: string, elem?: any) => void
}

export default function WorkItemHeader ({ workspaceId, workspace, handleDelete, handleEdit }: WorkspaceHeaderProps) {
  return (
    <div className="flex flex-row items-center mb-2">
      <WorkspaceLink name={workspace.name} id={workspaceId} />
      <WorkspaceOptions workspaceId={workspaceId} workspace={workspace} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  )
}