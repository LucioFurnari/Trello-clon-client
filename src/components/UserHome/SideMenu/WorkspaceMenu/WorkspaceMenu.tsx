import ListContainer from "./ListContainer"
import CreateWorkspace from "./CreateWorkspace"

export default function WorkspaceMenu() {
  return (
    <div>
      <h3 className="text-zinc-400 text-sm">Workspaces</h3>
      <ListContainer name={"Example workspace"} />
      <CreateWorkspace />
    </div>
  )
}