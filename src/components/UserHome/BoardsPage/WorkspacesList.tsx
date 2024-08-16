import { getAllWorkspacesOfUser } from "@/lib/workspace";
import { FetchDataError } from "@/types/exceptions";
import { WorkspaceItem } from "./WorkspaceItem"

export default async function WorkspacesList() {
  const data = await getAllWorkspacesOfUser();

  if (!data) throw new FetchDataError();

  return (
    <div>
      {
        data.length > 0 &&
        data.map((item: any) => {
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