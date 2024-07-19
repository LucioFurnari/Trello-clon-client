import { logout } from "@/lib/auth";

export default function LogoutButton() {

  async function handleLogout() {
    await logout()
  }

  return (
    <button className="ml-2" onClick={handleLogout}>
      Logout
    </button>
  )
}