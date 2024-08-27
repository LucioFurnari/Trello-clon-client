'use client'

import MessageModal from "@/components/Modal/MessageModal";
import CreateWorkspaceForm from "@/components/CreateWorkspace/CreateWorkspaceForm";
import { useWorkspaceContext } from "@/context/WorkspaceContext";
import { useState } from "react";

export default function CreateWorkspace() {
  const [openModal, setOpenModal] = useState(false);
  const context = useWorkspaceContext();

  function handleChangeState(newWorkspace: any) {
    context?.setWorkspace([...context.workspace, newWorkspace])
  }

  return (
    <>
    <button onClick={() => setOpenModal(true)} className="bg-gray-500 hover:bg-gray-400/50 p-2 w-full">
      Create Workspace
    </button>
    {
      openModal &&
      <MessageModal setAction={() => setOpenModal(false)}>
        <CreateWorkspaceForm  setAction={handleChangeState}/>
      </MessageModal>
    }
    </>
  )
}