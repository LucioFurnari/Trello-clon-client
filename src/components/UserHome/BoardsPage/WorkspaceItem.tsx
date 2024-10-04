import BoardList from "../../BoardList/BoardList"
import { BoardData } from "@/types/types"
import { useWorkspaceContext } from "@/context/WorkspaceContext"
import { WorkspaceType } from "@/types/types"
import WorkItemHeader from "@/components/Workspace/WorkItemHeader"

interface WorkspaceItemProp {
  workspace: WorkspaceType,
  boards?: BoardData[] | [],
  workspaceId: string
}

export function WorkspaceItem({ boards, workspaceId, workspace }: WorkspaceItemProp) {
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

  function handleEditWorkspace(newData: any, id: string) {
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
      <WorkItemHeader workspaceId={workspaceId} workspace={workspace} handleDelete={handleDeleteWorkspace} handleEdit={handleEditWorkspace} />
      <BoardList boards={boards} workspaceId={workspaceId} createHandle={handleCreateBoard} deleteHandle={handleDeleteBoard}/>
    </div>
  )
}