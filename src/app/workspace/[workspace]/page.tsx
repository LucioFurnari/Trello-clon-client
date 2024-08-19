import WorkspacePage from "@/components/Workspace/WorkspacePage"

export default async function Workspace({ params }: { params: { workspace: string }}) {

  return (
    <WorkspacePage workspaceId={params.workspace} />
  )
}