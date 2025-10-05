'use client'

import ListContainer from "./ListContainer"
import CreateWorkspace from "./CreateWorkspace"
import { WorkspaceType, WorkspaceData } from "@/types/types"

type WorkspaceMenuProps = {
  workspaces: WorkspaceData[],
};

export default function WorkspaceMenu({ workspaces }: WorkspaceMenuProps) {

  return (
    <>
      <h3 className="text-zinc-400 text-xl border-b-[1px] border-gray-500/50 py-2 ml-2 mr-2">Workspaces</h3>
      {
        workspaces &&
        workspaces.length > 0 &&
        <div>
          {
            workspaces.map((workspace: WorkspaceType) => {
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