
interface BoardHeaderProps {
  title: string
}

export default function BoardHeader({title}: BoardHeaderProps) {
  return (
    <header className=" backdrop-blur bg-white/30 p-4 mb-4">
      <h1 className=" text-2xl font-semibold ml-2">{title}</h1>
    </header>
  )
}