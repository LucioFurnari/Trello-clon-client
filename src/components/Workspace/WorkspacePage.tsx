import { getWorkspace } from "@/lib/workspace"
import WorkspaceHeader from "./WorkspaceHeader"

interface WorkspacePageProp {
  workspaceId: string
}

export default async function WorkspacePage({ workspaceId }: WorkspacePageProp) {
  const workspace = await getWorkspace(workspaceId);
  
  return (
    <main>
      <WorkspaceHeader title={workspace.name} description={workspace.description} visibilityPrivate={workspace.visibilityPrivate} visibilityPublic={workspace.visibilityPublic} />
    </main>
  )
}