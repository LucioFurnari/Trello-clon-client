import { createWorkspace } from "@/lib/workspace"

export default function CreateWorkspaceForm() {
  return (
    <form action={createWorkspace}>
      <input type="text" name="name"/>
      <button type="submit">Create</button>
    </form>
  )
}