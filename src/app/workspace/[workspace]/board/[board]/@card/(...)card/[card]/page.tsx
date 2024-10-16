import Card from "@/components/Card/Card"

export default function CardPage({params}: {params: {card: string}}) {

  return (
    <Card cardId={params.card} />
  )
}