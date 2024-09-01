import MessageModal from "../Modal/MessageModal"
import { useState } from "react"

interface UpdateWorkspaceProps {
  id: string
}

export default function EditWorkspace({ id }: UpdateWorkspaceProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)} className="p-2">Edit</button>
      {
        openModal &&
        <MessageModal setAction={() => setOpenModal(false)}>
          <div>
            <form>
              <input type="text" name="name" placeholder="Board name"/>
            </form>
          </div>
        </MessageModal>
      }
    </>
  )
}