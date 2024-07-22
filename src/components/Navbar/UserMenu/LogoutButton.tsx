import { logout } from "@/lib/auth";
import { useUserContext } from "@/context/UserContext";

export default function LogoutButton() {
  const { setIsLogged } = useUserContext();

  async function handleLogout() {
    await logout()
    setIsLogged(false)
  }

  return (
    <button className="ml-2" onClick={handleLogout}>
      Logout
    </button>
  )
}