import MembersList from "../Users/Members/MembersList";

interface BoardHeaderProps {
  title: string,
  members: any[],
}

export default function BoardHeader({ title, members }: BoardHeaderProps) {
  return (
    <header className="flex items-center backdrop-blur bg-white/30 p-4 mb-4">
      <h1 className=" text-2xl font-semibold ml-2">{title}</h1>
      <MembersList members={members}/>
    </header>
  )
}