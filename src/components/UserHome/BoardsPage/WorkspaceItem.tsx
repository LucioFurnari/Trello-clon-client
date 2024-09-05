import BoardList from "../../BoardList/BoardList"
import WorkspaceOptions from "@/components/WorkspaceOptions/WorkspaceOptions"
import WorkspaceLink from "@/components/Workspace/WorkspaceLink"
import { BoardData } from "@/types/types"
import { useWorkspaceContext } from "@/context/WorkspaceContext"

interface WorkspaceItemProp {
  name: string,
  description?: string,
  boards?: BoardData[] | [],
  workspaceId: string
}

export function WorkspaceItem({ name, boards, workspaceId, description }: WorkspaceItemProp) {
  const context = useWorkspaceContext();

  function handleCreateBoard(board: any) {
    context?.setWorkspace(context.workspace.map((workspace) => {
      if (workspace.workspaceId === workspaceId) {
        return {...workspace, boards: [...workspace.boards, board]}
      } else {
        return workspace;
      }
    }))
  }

  const handleDeleteBoard = (boardId: string) => {
    context?.setWorkspace(context.workspace.map((workspace) => {
      if (workspace.workspaceId === workspaceId) {
        return {...workspace, boards: workspace.boards.filter(board => board.boardId !== boardId)}
      } else {
        return workspace;
      }
    }))
  }

  return (
    <div className="pb-4">
      <WorkspaceLink name={name} id={workspaceId} />
      <WorkspaceOptions workspaceId={workspaceId} name={name} description={description} />
      <BoardList boards={boards} workspaceId={workspaceId} createHandle={handleCreateBoard} deleteHandle={handleDeleteBoard}/>
    </div>
  )
}