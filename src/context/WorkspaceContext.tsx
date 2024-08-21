'use client'

import { createContext, useContext, useState } from "react"

type WorkspaceContextType = {
  workspace: string
  setWorkspace: React.Dispatch<React.SetStateAction<string>>
}

type WorkspaceContextProviderType = {
  children: React.ReactNode,
}

const defaultValue: WorkspaceContextType = {
  workspace: 'hi',
  setWorkspace: (string) => string 
}

const WorkspaceContext = createContext<WorkspaceContextType>(defaultValue);

export default function WorkspaceContextProvider({ children }: WorkspaceContextProviderType) {
  const [workspace, setWorkspace] = useState('');

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