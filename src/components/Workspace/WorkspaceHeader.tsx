'use client'

import WorkspaceOptions from "../WorkspaceOptions/WorkspaceOptions";
import { WorkspaceData } from "@/types/types";
import { useState } from "react";

interface WorkspaceHeaderProps {
  workspace: WorkspaceData,
};

export default function WorkspaceHeader({ workspace }: WorkspaceHeaderProps) {
  const [workspaceState, setWorkspace] = useState(workspace);

  function handleEditWorkspace(newData: any) {
    setWorkspace((prevState) => ({
      ...prevState,
      workspaceId: newData.workspaceId,
      name: newData.name,
      description: newData.description,
      visibilityPrivate: newData.visibilityPrivate,
      visibilityPublic: newData.visibilityPublic,
      canEditAdmin: newData.canEditAdmin,
      canEditUser: newData.canEditUser,
    }))
  }

  return (
    <header className="w-fit ml-20 py-8">
      <h1 className="text-4xl text-left text-gray-200">{workspaceState.name}</h1>
      <WorkspaceOptions workspaceId={workspace.workspaceId} workspace={workspaceState} handleDelete={() => { } } handleEdit={handleEditWorkspace}  />
      <span className="text-sm text-gray-200">
        {
          workspaceState.visibilityPrivate && 'Private'
        }
        {
          workspaceState.visibilityPublic && 'Public'
        }
      </span>
      <p className="mt-4 text-gray-200">{workspaceState.description}</p>
    </header>
  )
}