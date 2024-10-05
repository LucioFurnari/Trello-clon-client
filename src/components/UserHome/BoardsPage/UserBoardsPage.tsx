import WorkspacesList from "./WorkspacesList";

export default function UserBoardsPage() {
  return (
    <section className="flex flex-col p-4">
      <h1 className="my-4 text-xl">Your Workspaces</h1>
      <WorkspacesList/>
    </section>
  )
}