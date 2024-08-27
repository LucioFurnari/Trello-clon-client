import { useState } from "react";
import { createWorkspace } from "@/lib/workspace"

type formReturnType = {
  workspace: {
    workspaceId: string,
    name: string,
    boards: []
  }
}

interface CreateWorkspaceProps {
  setAction: (elem: formReturnType) => void
}

export default function CreateWorkspaceForm({ setAction }: CreateWorkspaceProps) {
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceDescription, setWorkspaceDescription] = useState('');

  async function handleCreateWorkspace(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newWorkspace = {
      name: workspaceName,
      description: workspaceDescription
    }
    const data =  await createWorkspace(newWorkspace);

    if (data.error) {
      console.log(data)
      return
    };
    
    const workspaceData: formReturnType = {
      workspace: {
        workspaceId: data.workspaceId,
        name: data.name,
        boards: []
      }
    }
    setAction(workspaceData)
  }

  return (
    <div>
      <h2 className="text-gray-500">Create workspace</h2>
      <form className="flex flex-col" onSubmit={handleCreateWorkspace}>
        <input onChange={(e) => setWorkspaceName(e.currentTarget.value)} className="p-2 border-b-2 border-gray-500/50 mt-4" type="text" name="name" placeholder="Workspace name"/>
        <textarea onChange={(e) => setWorkspaceDescription(e.currentTarget.value)} className="p-2 border-b-2 border-gray-500/50 mt-4" name="description" placeholder="Description"/>
        <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 mt-4" type="submit">Create</button>
      </form>
    </div>
  )
}