import { logout } from "@/lib/auth";
import { useUserContext } from "@/context/UserContext";

export default function LogoutButton() {
  const { setIsLogged } = useUserContext();

  async function handleLogout() {
    await logout()
    setIsLogged(false)
  }

  return (
    <button className=" text-xl ml-2 hover:bg-gray-500 border-gray-400 rounded py-1 px-2 transition-colors" onClick={handleLogout}>
      Logout
    </button>
  )
}