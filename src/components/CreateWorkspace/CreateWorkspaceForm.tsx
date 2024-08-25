'use client'

import { useState } from "react";
import { createWorkspace } from "@/lib/workspace"
import { useWorkspaceContext } from "@/context/WorkspaceContext"

export default function CreateWorkspaceForm() {
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceDescription, setWorkspaceDescription] = useState('');
  const context = useWorkspaceContext();

  async function handleCreateWorkspace() {
    const newWorkspace = {
      name: workspaceName,
      description: workspaceDescription
    }
    const data =  await createWorkspace(newWorkspace);

    if (data.error) return;
    
    context?.setWorkspace(data);
  }

  return (
    <div>
      <h2 className="text-gray-500">Create workspace</h2>
      <form className="flex flex-col" action={handleCreateWorkspace}>
        <input className="p-2 border-b-2 border-gray-500/50 mt-4" type="text" name="name" placeholder="Workspace name"/>
        <textarea className="p-2 border-b-2 border-gray-500/50 mt-4" name="description" placeholder="Description"/>
        <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 mt-4" type="submit">Create</button>
      </form>
    </div>
  )
}