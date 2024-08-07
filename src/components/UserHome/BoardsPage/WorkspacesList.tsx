import { WorkspaceItem } from "./WorkspaceItem"

export default async function WorkspacesList({ workspaces }: { workspaces: any}) {
  return (
    <div>
      {
        workspaces &&
        workspaces.map((item: any) => {
          return (
            <WorkspaceItem 
              name={item.workspace.name} 
              key={item.workspace.workspaceId} 
              boards={item.workspace.boards}
              workspaceId={item.workspace.workspaceId}
            />
          )
        }
        )
      }
    </div>
  )
}