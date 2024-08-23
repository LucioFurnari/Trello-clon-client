'use client'

import { createContext, useContext, useState, useEffect } from "react"
import { WorkspaceData, BoardData } from "@/types/types"
import { getAllWorkspacesOfUser } from "@/lib/workspace"

type WorkspaceContextType = {
  workspace: WorkspaceData[] | null,
  setWorkspace: React.Dispatch<React.SetStateAction<WorkspaceData[] | null>>
}

type WorkspaceContextProviderType = {
  children: React.ReactNode,
}

const WorkspaceContext = createContext<WorkspaceContextType | null>(null);

export default function WorkspaceContextProvider({ children }: WorkspaceContextProviderType) {
  const [workspace, setWorkspace] = useState<WorkspaceData[] | null>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllWorkspacesOfUser();
      console.log('Workspaces: ', data);

      if (data) setWorkspace(data)
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