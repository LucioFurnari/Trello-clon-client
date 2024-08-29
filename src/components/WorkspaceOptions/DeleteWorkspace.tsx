import MessageModal from "../Modal/MessageModal"
import { deleteWorkspace } from "@/lib/workspace";
import { useState } from "react"

interface DeleteWorkspaceProps {
  id: string,
  setAction: (elem: any) => void
}

export default function DeleteWorkspace({ id, setAction }: DeleteWorkspaceProps) {
  const [openModal, setOpenModal] = useState(false);

  async function handleDeleteWorkspace() {
    const res = await deleteWorkspace(id);
    setAction(res.deleteWorkSpace)
  }

  return (
    <>
      <button onClick={() => setOpenModal(true)} className="p-2">Delete</button>
      {
        openModal &&
        <MessageModal setAction={() => setOpenModal(false)}>
        <div className="flex flex-col">
          <h2 className="text-center">You wanna delete this workspace ?</h2>
          <p className="text-center">All boards will be deleted</p>
          <button onClick={handleDeleteWorkspace} className="mx-auto mt-4 px-8 py-2 rounded bg-red-600 text-white">Delete</button>
        </div>
      </MessageModal>
      }
    </>
  )
}