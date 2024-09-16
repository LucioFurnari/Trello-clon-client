import MessageModal from "../Modal/MessageModal"
import { WorkspaceType } from "@/types/types"
import { updateWorkspace } from "@/lib/workspace"
import { useState } from "react"

interface UpdateWorkspaceProps {
  workspace: WorkspaceType,
  editAction: (elem?: any, id?: string) => void
}

export default function EditWorkspace({ workspace, editAction }: UpdateWorkspaceProps) {
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState({
    name: workspace.name,
    description: workspace.description,
    visibilityPrivate: workspace.visibilityPrivate,
    visibilityPublic: workspace.visibilityPublic
  });

  function handleEditData(event: React.FormEvent<HTMLInputElement>) {
    const {name, value} = event.currentTarget;

    setEditData({
      ...editData,
      [name]: value 
    })
  }

  async function handleUpdateWorkspace(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const res = await updateWorkspace(workspace.workspaceId, editData);

    if (!res.error) {
      editAction(res, workspace.workspaceId)
    }
  }

  return (
    <>
      <button onClick={() => setOpenModal(true)} className="p-2">Edit</button>
      {
        openModal &&
        <MessageModal setAction={() => setOpenModal(false)}>
          <div>
            <form className="flex flex-col" onSubmit={handleUpdateWorkspace}>
              <input onChange={handleEditData} className="border-b-2 mb-4 p-2" type="text" name="name" placeholder="Workspace name" value={editData.name}/>
              <input onChange={handleEditData} className="border-b-2 mb-4 p-2" type="text" name="description" placeholder="Workspace description" value={editData.description}/>
              <fieldset>
                <input  type="checkbox" id="private" name="visibilityPrivate" checked={editData.visibilityPrivate}/>
                <label htmlFor="private">Private</label>
              </fieldset>
              <fieldset>
                <input className="inline" type="checkbox" id="public" name="visibilityPublic" checked={editData.visibilityPublic}/>
                <label htmlFor="public">Public</label>
              </fieldset>
              <button className="bg-blue-600 text-gray-200 py-2 px-8 ml-auto" type="submit">Edit</button>
            </form>
          </div>
        </MessageModal>
      }
    </>
  )
}