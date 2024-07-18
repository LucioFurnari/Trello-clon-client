import ListContainer from "./ListContainer"

export default function WorkspaceMenu() {
  return (
    <div>
      <h3 className="text-zinc-400 text-sm">Workspaces</h3>
      <ListContainer name={"Example workspace"} />
    </div>
  )
}