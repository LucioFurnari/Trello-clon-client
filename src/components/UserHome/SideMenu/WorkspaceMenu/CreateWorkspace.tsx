'use client'

import MessageModal from "@/components/Modal/MessageModal";
import { useState } from "react";

export default function CreateWorkspace() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <button onClick={() => setOpenModal(true)} className=" bg-gray-500 hover:bg-gray-400/50 p-2 w-full">
      Create Workspace
    </button>
    {
      openModal &&
      <MessageModal setAction={() => setOpenModal(false)}>
        <h2>Create workspace</h2>
      </MessageModal>
    }
    </>
  )
}