export default function UserLayout({
  children,
  boards,
  workspace,
}: {
  children: React.ReactNode,
  boards: React.ReactNode,
  workspace: React.ReactNode,
}) {
  return (
    <main className="flex min-h-[calc(100vh-52px)] bg-slate-600">
      {children}
      {boards}
      {workspace}
    </main>
  )
}