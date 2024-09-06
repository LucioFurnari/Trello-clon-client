import MessageModal from "../Modal/MessageModal"
import { updateWorkspace } from "@/lib/workspace"
import { useState } from "react"

interface UpdateWorkspaceProps {
  workspaceName: string,
  workspaceDesc?: string
  id: string,
  editAction: (elem?: any) => void
}

export default function EditWorkspace({ id, workspaceName, workspaceDesc, editAction }: UpdateWorkspaceProps) {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState(workspaceName);
  const [description, setDescription] = useState(workspaceDesc);

  async function handleUpdateWorkspace(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const editedData = {
      name,
      description
    }
    const res = await updateWorkspace(id, editedData);
    editAction(res)
  }

  return (
    <>
      <button onClick={() => setOpenModal(true)} className="p-2">Edit</button>
      {
        openModal &&
        <MessageModal setAction={() => setOpenModal(false)}>
          <div>
            <form className="flex flex-col" onSubmit={handleUpdateWorkspace}>
              <input onChange={(event: React.FormEvent<HTMLInputElement>) => setName(event.currentTarget.value)} className="border-b-2 mb-4 p-2" type="text" name="name" placeholder="Workspace name" value={name}/>
              <input onChange={(event: React.FormEvent<HTMLInputElement>) => setDescription(event.currentTarget.value)} className="border-b-2 mb-4 p-2" type="text" name="description" placeholder="Workspace description" value={description}/>
              <button className="bg-blue-600 text-gray-200 py-2 px-8 ml-auto" type="submit">Edit</button>
            </form>
          </div>
        </MessageModal>
      }
    </>
  )
}