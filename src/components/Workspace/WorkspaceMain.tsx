import BoardList from "../BoardList/BoardList"

interface WorkspaceMainProps {
  id: string,
}

export default function WorkspaceMain({ id }: WorkspaceMainProps) {
  return (
    <section>
      <BoardList workspaceId={id} />
    </section>
  )
}