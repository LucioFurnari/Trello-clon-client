import { SVGProps } from "react"
import Link from "next/link"


export default function HomeLink() {
  return (
    <Link href={"/"}><IcBaselineDashboard/></Link>
  )
}

export function IcBaselineDashboard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"></path></svg>
  )
}