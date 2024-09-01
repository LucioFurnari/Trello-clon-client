import DeleteWorkspace from "./DeleteWorkspace";
import EditWorkspace from "./EditWorkspace";
import { useState } from "react"
import { SVGProps } from "react"
import { useWorkspaceContext } from "@/context/WorkspaceContext";

interface WorkspaceOptionsProps {
  workspaceId: string
}

export default function WorkspaceOptions({ workspaceId }: WorkspaceOptionsProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const context = useWorkspaceContext();

  function handleDeleteWorkspace(elem: any) {
    context?.setWorkspace(
      context.workspace.filter(workspace => workspace.workspaceId !== elem.workspaceId)
    )
  }

  return (
    <div className="relative inline-block">
      <button onClick={() => setOpenMenu((value: boolean) => !value)} className="text-white">
        <TablerPencil />
      </button>
      {
        openMenu &&
        <div className="z-[1] px-4 top-0 left-10 absolute bg-violet-500">
          <DeleteWorkspace id={workspaceId} setAction={handleDeleteWorkspace}/>
          <EditWorkspace id={workspaceId} />
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