import { getAllWorkspacesOfUser } from "@/lib/workspace"
import WorkspacesList from "@/components/UserHome/BoardsPage/WorkspacesList";

export async function getServerSideProps() {
  const data = await getAllWorkspacesOfUser();

  return {
    props: {
      data
    }
  };
}

export default async function BoardsPage({ data }: {data:any}) {

  console.log(data)

  return (
    <div className="flex flex-col p-4">
      <h1>This is the list of the user boards</h1>
      <h2>Your Workspaces</h2>
      <WorkspacesList workspaces={data} />
    </div>
  )
}