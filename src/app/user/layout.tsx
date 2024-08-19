
export default function UserLayout({
  children,
  boards,
}: {
  children: React.ReactNode,
  boards: React.ReactNode
}) {
  return (
    <main className="flex min-h-[calc(100vh-56px)] bg-slate-600">
      {children}
      {boards}
    </main>
  )
}