import WorkspacesList from "@/components/UserHome/BoardsPage/WorkspacesList";

export default function BoardsPage() {

  return (
    <div className="flex flex-col p-4">
      <h1>This is the list of the user boards</h1>
      <h2 className="my-4 text-xl">Your Workspaces</h2>
      <WorkspacesList/>
    </div>
  )
}