'use client'

import ListContainer from "./ListContainer"
import CreateWorkspace from "./CreateWorkspace"
import { useWorkspaceContext } from "@/context/WorkspaceContext"

export default function WorkspaceMenu() {
  const context = useWorkspaceContext();

  return (
    <>
      <h3 className="text-zinc-400 text-xl border-b-[1px] border-gray-500/50 py-2 ml-2 mr-2">Workspaces</h3>
      {
        context?.workspace &&
        context.workspace.length > 0 &&
        <div>
          {
            context.workspace.map((workspace) => {
              return(
                <ListContainer key={workspace.workspaceId} name={workspace.name} id={workspace.workspaceId}/>
              )
          })
          }
        </div>
      }
      <CreateWorkspace />
    </>
  )
}