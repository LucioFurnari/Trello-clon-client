'use client'

import BoardList from "../BoardList/BoardList"
import { WorkspaceData, BoardData } from "@/types/types"
import { getWorkspace } from "@/lib/workspace"
import { useEffect, useState } from "react"

interface WorkspaceMainProps {
  id: string,
  workspace: WorkspaceData
}

export default function WorkspaceMain({ id, workspace }: WorkspaceMainProps) {
  const [workspaceData, setWorkspace] = useState(workspace);

  function handleCreateBoard(board: any) {
    if (workspaceData) setWorkspace((prevState: WorkspaceData) => ({...prevState, boards: [...prevState.boards, board]}));
  }

  function handleDeleteBoard(id: string) {
    if (workspaceData) setWorkspace((prevState: WorkspaceData) => ({...prevState,  boards: prevState.boards.filter(board => board.boardId !== id)}));
  }

  return (
    <section className="mx-20">
      <BoardList boards={workspaceData?.boards}  workspaceId={id} createHandle={handleCreateBoard} deleteHandle={handleDeleteBoard}/>
    </section>
  )
}