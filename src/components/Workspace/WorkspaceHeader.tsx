'use client'

import WorkspaceOptions from "../WorkspaceOptions/WorkspaceOptions"

interface WorkspaceHeaderProps {
  id: string,
  title: string,
  description: string,
  visibilityPrivate: boolean,
  visibilityPublic: boolean
}

export default function WorkspaceHeader({ id, title, description, visibilityPrivate, visibilityPublic }: WorkspaceHeaderProps) {
  return (
    <header className="w-fit ml-20 py-8">
      <h1 className="text-4xl text-left text-gray-200">{title}</h1>
      <WorkspaceOptions workspaceId={id} name={title} handleDelete={function (elem?: any): void {
        throw new Error("Function not implemented.")
      } } handleEdit={function (id: string, elem?: any): void {
        throw new Error("Function not implemented.")
      } } />
      <span className="text-sm text-gray-200">
        {
          visibilityPrivate && 'Private'
        }
        {
          visibilityPublic && 'Public'
        }
      </span>
      <p className="mt-4 text-gray-200">{description}</p>
    </header>
  )
}