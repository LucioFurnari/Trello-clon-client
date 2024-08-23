'use client'

import ListContainer from "./ListContainer"
import CreateWorkspace from "./CreateWorkspace"
import { useWorkspaceContext } from "@/context/WorkspaceContext"

export default function WorkspaceMenu() {
  const context = useWorkspaceContext();

  return (
    <div>
      <h3 className="text-zinc-400 text-xl border-b-[1px] border-gray-500/50 py-2 ml-2 mr-2">Workspaces</h3>
      {
        context?.workspace && 
        <div>
          {
            context.workspace.map((item) => {
              return(
                <ListContainer key={item.workspace.workspaceId} name={item.workspace.name}/>
              )
          })
          }
        </div>
      }
      <CreateWorkspace />
    </div>
  )
}