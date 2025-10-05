
import { WorkspaceItem } from "../BoardsPage/WorkspaceItem"
import { getWorkspace } from "@/lib/workspace"

interface WorkspacePageProps {
  workspaceId: string,
}

export default async function UserWorkspacePage({ workspaceId }: WorkspacePageProps) {
  const workspace = await getWorkspace(workspaceId);

  return (
    <section className="p-4">
      {
        workspace &&
        <WorkspaceItem workspace={workspace} workspaceId={workspaceId} boards={workspace.boards} />
      }
    </section>
  )
}