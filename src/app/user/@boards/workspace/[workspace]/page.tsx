import UserWorkspacePage from "@/components/UserHome/WorkspacePage/UserWorkspacePage"

export default function WorkspacePage({ params }: { params: { workspace: string }}) {

  return (
    <UserWorkspacePage workspaceId={params.workspace}/>
  )
}