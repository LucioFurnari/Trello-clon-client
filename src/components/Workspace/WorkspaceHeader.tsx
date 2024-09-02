interface WorkspaceHeaderProps {
  title: string,
  description: string,
  visibilityPrivate: boolean,
  visibilityPublic: boolean
}

export default function WorkspaceHeader({ title, description, visibilityPrivate, visibilityPublic }: WorkspaceHeaderProps) {
  return (
    <header className="mx-auto w-fit">
      <h1 className="text-2xl text-gray-200">{title}</h1>
      <span className="text-sm text-gray-200">
        {
          visibilityPrivate && 'Private'
        }
        {
          visibilityPublic && 'Public'
        }
      </span>
      <p>{description}</p>
    </header>
  )
}