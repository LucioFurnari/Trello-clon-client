
export default function BoardLayout({
  children,
  card,
}: {
  children: React.ReactNode,
  card: React.ReactNode
}) {
  return (
    <>
      {children}
      {card}
    </>
  )
}