'use client'

import BoardList from "../BoardList/BoardList"
import { WorkspaceData, BoardData } from "@/types/types"
import { getWorkspace } from "@/lib/workspace"
import { useEffect, useState } from "react"

interface WorkspaceMainProps {
  id: string,
}

export default function WorkspaceMain({ id }: WorkspaceMainProps) {
  const [workspace, setWorkspace] = useState<WorkspaceData>();

  useEffect(() => {
    async function handleGetWorkspace() {
      const data = await getWorkspace(id);
      setWorkspace(data);
    }
    handleGetWorkspace()
  }, [id])

  function handleCreateBoard(board: any) {
    setWorkspace({...workspace, boards: [...workspace.boards, board]})
  }

  function handleDeleteBoard(id: string) {
    console.log({...workspace,  boards: workspace.boards.filter(board => board.boardId !== id)})
    setWorkspace({...workspace,  boards: workspace.boards.filter(board => board.boardId !== id)})
  }

  return (
    <section>
      <BoardList boards={workspace?.boards}  workspaceId={id} createHandle={handleCreateBoard} deleteHandle={handleDeleteBoard}/>
    </section>
  )
}