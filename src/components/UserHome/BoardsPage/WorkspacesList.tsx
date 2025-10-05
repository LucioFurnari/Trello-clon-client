import { WorkspaceItem } from "./WorkspaceItem";
import { getAllWorkspacesOfUser } from "@/lib/workspace";
import { WorkspaceData } from "@/types/types"

export default async function WorkspacesList() {
  const workspaces = await getAllWorkspacesOfUser();

  return (
    <section>
      {
        workspaces &&
        workspaces.length > 0 &&
        <div>
          {
        workspaces.map((workspace: WorkspaceData) => {
          return (
            <WorkspaceItem 
              workspace={workspace}
              key={workspace.workspaceId} 
              boards={workspace.boards}
              workspaceId={workspace.workspaceId}
            />
            )}
          )
        }
        </div>
      }
    </section>
  )
}