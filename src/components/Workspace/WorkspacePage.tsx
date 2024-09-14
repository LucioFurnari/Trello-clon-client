import { getWorkspace } from "@/lib/workspace"
import WorkspaceHeader from "./WorkspaceHeader"
import WorkspaceMain from "./WorkspaceMain"
import AccessDenied from "./AccessDenied"

interface WorkspacePageProp {
  workspaceId: string
}

export default async function WorkspacePage({ workspaceId }: WorkspacePageProp) {
  const workspace = await getWorkspace(workspaceId);
  
  console.log(workspace)
  return (
    <main className=" bg-slate-800 h-[calc(100vh-52px)] min-h-[calc(100vh-52px)]">
      {
        workspace.statusCode === 403 ?
          <AccessDenied />
        : 
          <>
          <WorkspaceHeader title={workspace.name} description={workspace.description} visibilityPrivate={workspace.visibilityPrivate} visibilityPublic={workspace.visibilityPublic} />
          <WorkspaceMain id={workspaceId} />
          </>
      }
    </main>
  )
}