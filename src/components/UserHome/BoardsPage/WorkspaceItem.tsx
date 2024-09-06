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

  function handleDeleteBoard (boardId: string) {
    context?.setWorkspace(context.workspace.map((workspace) => {
      if (workspace.workspaceId === workspaceId) {
        return {...workspace, boards: workspace.boards.filter(board => board.boardId !== boardId)}
      } else {
        return workspace;
      }
    }))
  }

  function handleDeleteWorkspace(id: string) {
    context?.setWorkspace(context.workspace.filter((item) => item.workspaceId !== id));
  }

  function handleEditWorkspace(id: string, newData: any) {
    context?.setWorkspace(context.workspace.map((item) => {
      if (item.workspaceId === id) {
        return {
          ...item,
          ...newData
        }
      } else {
        return item
      }
    }))
  }

  return (
    <div className="pb-4">
      <WorkspaceLink name={name} id={workspaceId} />
      <WorkspaceOptions workspaceId={workspaceId} name={name} description={description} handleDelete={handleDeleteWorkspace} handleEdit={handleEditWorkspace}/>
      <BoardList boards={boards} workspaceId={workspaceId} createHandle={handleCreateBoard} deleteHandle={handleDeleteBoard}/>
    </div>
  )
}