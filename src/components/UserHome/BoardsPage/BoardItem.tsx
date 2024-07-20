
interface BoardItemProp {
  title: string,
}

export default function BoardItem({ title }: BoardItemProp) {
  return (
    <li>
      <p>{title}</p>
    </li>
  )
}