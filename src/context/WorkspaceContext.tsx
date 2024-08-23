'use client'

import { createContext, useContext, useState, useEffect } from "react"
import { WorkspaceData, BoardData } from "@/types/types"

type WorkspaceContextType = {
  workspace: WorkspaceData[] | undefined,
  setWorkspace: React.Dispatch<React.SetStateAction<WorkspaceData[] | undefined>>
}

type WorkspaceContextProviderType = {
  children: React.ReactNode,
}

const WorkspaceContext = createContext<WorkspaceContextType | null>(null);

export default function WorkspaceContextProvider({ children }: WorkspaceContextProviderType) {
  const [workspace, setWorkspace] = useState<WorkspaceData[] | undefined>();

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