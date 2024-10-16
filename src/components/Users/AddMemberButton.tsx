import { addMemberToWorkspace } from "@/lib/workspace"

interface AddMemberProps {
  workspaceId: string,
  userId: string
}

export default function AddMemberButton({ workspaceId, userId}: AddMemberProps) {

  async function handleAddMember() {
    const addedUser = await addMemberToWorkspace(workspaceId, userId);
    console.log(addedUser);
  }

  return (
    <button
      className="p-2 rounded bg-gray-400 hover:bg-gray-300/50"
      onClick={handleAddMember}>
      Add member
    </button>
  )
}