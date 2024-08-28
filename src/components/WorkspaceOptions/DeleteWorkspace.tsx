import MessageModal from "../Modal/MessageModal"
import { useState } from "react"

export default function DeleteWorkspace() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)} className="p-2">Delete</button>
      {
        openModal &&
        <MessageModal setAction={() => setOpenModal(false)}>
        <div>
          <h2>You wanna delete this workspace ?</h2>
          <p>All boards will be deleted</p>
        </div>
      </MessageModal>
      }
    </>
  )
}