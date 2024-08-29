'use client'

import { createContext, useContext, useState, useEffect } from "react"
import { WorkspaceData, BoardData, WorkspaceListData } from "@/types/types"
import { getAllWorkspacesOfUser } from "@/lib/workspace"

type WorkspaceContextType = {
  workspace: WorkspaceListData[] | [],
  setWorkspace: React.Dispatch<React.SetStateAction<WorkspaceListData[] | []>>
}

type WorkspaceContextProviderType = {
  children: React.ReactNode,
}

const WorkspaceContext = createContext<WorkspaceContextType | null>(null);

export default function WorkspaceContextProvider({ children }: WorkspaceContextProviderType) {
  const [workspace, setWorkspace] = useState<WorkspaceListData[] | []>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllWorkspacesOfUser();
      
      if (data.error) return

      setWorkspace(data)
    }
    getData();
  }, [])

  return (
    <WorkspaceContext.Provider
      value={{
        workspace,
        setWorkspace
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  )
}

export function useWorkspaceContext() {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error(
      "useUserContext must be used within a UserContextProvider"
    );
  }
  return context;
}