interface WorkspaceHeaderProps {
  title: string,
  description: string,
  visibilityPrivate: boolean,
  visibilityPublic: boolean
}

export default function WorkspaceHeader({ title, description, visibilityPrivate, visibilityPublic }: WorkspaceHeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>
        {
          visibilityPrivate && 'Private'
        }
        {
          visibilityPublic && 'Public'
        }
      </span>
    </header>
  )
}