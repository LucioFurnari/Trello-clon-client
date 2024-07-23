
interface CardProps {
  title: string
}

export default function Card({title}: CardProps) {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  )
}