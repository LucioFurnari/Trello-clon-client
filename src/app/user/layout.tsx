
export default function UserLayout({
  children,
  boards,
}: {
  children: React.ReactNode,
  boards: React.ReactNode
}) {
  return (
    <main className="flex">
      {children}
      {boards}
    </main>
  )
}