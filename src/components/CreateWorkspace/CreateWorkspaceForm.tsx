import { createWorkspace } from "@/lib/workspace"

export default function CreateWorkspaceForm() {
  return (
    <div>
      <h2 className="text-gray-500">Create workspace</h2>
      <form className="flex flex-col" action={createWorkspace}>
        <input className="p-2" type="text" name="name" placeholder="Workspace name"/>
        <button className=" bg-blue-600 hover:bg-blue-500 text-white p-2" type="submit">Create</button>
      </form>
    </div>
  )
}