import Link from "next/link"

export default function OptionMenu() {
  return (
    <ul>
      <li>
        {/* / Change the href / */}
        <Link className="block text-center text-zinc-300" href={"/boards"}>Boards</Link>
      </li>
    </ul>
  )
}