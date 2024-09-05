'use client'

import { WorkspaceItem } from "./WorkspaceItem";
import { useWorkspaceContext } from "@/context/WorkspaceContext";

export default function WorkspacesList() {
  const context = useWorkspaceContext();

  return (
    <section>
      {
        context?.workspace &&
        context.workspace.length > 0 &&
        <div>
          {
        context.workspace.map((workspace) => {
          return (
            <WorkspaceItem 
              name={workspace.name}
              description={workspace.description}
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