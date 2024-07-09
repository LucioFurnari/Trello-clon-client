

export default function Workspace({ params }: { params: { workspace: string }}) {

  return (
    <main>
      <h1>Workspace id: {params.workspace}</h1>
    </main>
  )
}