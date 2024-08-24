'use client'

import { WorkspaceItem } from "./WorkspaceItem";
import { useWorkspaceContext } from "@/context/WorkspaceContext";

export default function WorkspacesList() {
  const context = useWorkspaceContext();

  return (
    <div>
      {
        context?.workspace &&
        context.workspace.map((item: any) => {
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