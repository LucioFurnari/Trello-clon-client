import DeleteWorkspace from "./DeleteWorkspace";
import EditWorkspace from "./EditWorkspace";
import { useState } from "react"
import { SVGProps } from "react"
import { WorkspaceType } from "@/types/types";

interface WorkspaceOptionsProps {
  workspaceId: string,
  workspace: WorkspaceType,
  handleDelete: (elem?: any) => void,
  handleEdit: (id: string, elem?: any) => void
}

export default function WorkspaceOptions({ workspaceId, workspace, handleDelete, handleEdit }: WorkspaceOptionsProps) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative inline-block">
      <button onClick={() => setOpenMenu((value: boolean) => !value)} className="text-white">
        <TablerPencil />
      </button>
      {
        openMenu &&
        <div className="z-[1] px-4 top-0 left-10 absolute bg-violet-500">
          <DeleteWorkspace id={workspaceId} setAction={handleDelete}/>
          <EditWorkspace  editAction={handleEdit} workspace={workspace}/>
        </div>
      }
    </div>
  )
}


export function TablerPencil(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 20h4L18.5 9.5a2.828 2.828 0 1 0-4-4L4 16zm9.5-13.5l4 4"></path></svg>
  )
}