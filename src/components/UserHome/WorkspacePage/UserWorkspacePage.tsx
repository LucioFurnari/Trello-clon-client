'use client'

import { useWorkspaceContext } from "@/context/WorkspaceContext"
import { WorkspaceItem } from "../BoardsPage/WorkspaceItem"

interface WorkspacePageProps {
  workspaceId: string,
}

export default function UserWorkspacePage({ workspaceId }: WorkspacePageProps) {
  const context = useWorkspaceContext();
  const workspace = context?.workspace.filter((item) => item.workspaceId === workspaceId);

  return (
    <section className="p-4">
      {
        workspace &&
        workspace.length > 0 &&
        <WorkspaceItem workspace={workspace[0]} workspaceId={workspaceId} boards={workspace[0].boards} />
      }
    </section>
  )
}