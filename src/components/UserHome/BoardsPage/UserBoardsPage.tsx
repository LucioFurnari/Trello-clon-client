import WorkspacesList from "./WorkspacesList";

export default function UserBoardsPage() {
  return (
    <section className="flex flex-col p-4">
      <h1>This is the list of the user boards</h1>
      <h2 className="my-4 text-xl">Your Workspaces</h2>
      <WorkspacesList/>
    </section>
  )
}