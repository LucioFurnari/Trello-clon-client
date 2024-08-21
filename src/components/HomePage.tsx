import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center min-h-[calc(100vh-56px)] p-6 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-white text-4xl mt-10 font-medium text-center">Trello brings all your tasks, teammates, and tools together</h1>
      <p className="text-white text-xl mt-2 text-center">Keep everything in the same place—even if your team isn’t.</p>
      <Link className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-4 mt-6 rounded w-full md:px-10 md:w-fit md:mx-auto inline-block text-center font-medium" href={"/register"}>Sign up - it’s free!</Link>
      <Image className="mt-6 mx-auto" src={"/images/TrelloUICollage.png"} alt={"An illustration showing different features of a Trello board"} width={500} height={460}/>
    </main>
  )
}