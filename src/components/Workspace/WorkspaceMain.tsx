import BoardList from "../BoardList/BoardList"
import { WorkspaceData } from "@/types/types"

interface WorkspaceMainProps {
  id: string,
  workspace: WorkspaceData
}

export default function WorkspaceMain({ id, workspace }: WorkspaceMainProps) {

  return (
    <section className="mx-20">
      <BoardList boards={workspace.boards}  workspaceId={id}/>
    </section>
  )
}