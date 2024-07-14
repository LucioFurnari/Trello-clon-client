interface WorkspaceHeaderProps {
  title: string,
  description: string
}

export default function WorkspaceHeader({ title, description }: WorkspaceHeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  )
}