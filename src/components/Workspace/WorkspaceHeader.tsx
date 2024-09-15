'use client'

import WorkspaceOptions from "../WorkspaceOptions/WorkspaceOptions";
import { WorkspaceType } from "@/types/types";

interface WorkspaceHeaderProps {
  workspace: WorkspaceType,
};

export default function WorkspaceHeader({ workspace }: WorkspaceHeaderProps) {
  return (
    <header className="w-fit ml-20 py-8">
      <h1 className="text-4xl text-left text-gray-200">{workspace.name}</h1>
      <WorkspaceOptions workspaceId={workspace.workspaceId} workspace={workspace} handleDelete={() => { } } handleEdit={function (id: string, elem?: any): void {}}  />
      <span className="text-sm text-gray-200">
        {
          workspace.visibilityPrivate && 'Private'
        }
        {
          workspace.visibilityPublic && 'Public'
        }
      </span>
      <p className="mt-4 text-gray-200">{workspace.description}</p>
    </header>
  )
}