import { logout } from "@/lib/auth";
import { useUserContext } from "@/context/UserContext";
import { useState } from "react";
import MessageModal from "@/components/Modal/MessageModal";

export default function LogoutButton() {
  const { setIsLogged } = useUserContext();
  const [open, setOpen] = useState(false);

  async function handleLogout() {
    await logout()
    setIsLogged(false)
  }

  return (
    <>
    <button onClick={() => setOpen(true)} className=" text-xl ml-2 text-gray-200 hover:bg-gray-500 border-gray-400 rounded py-1 px-2 transition-colors">
      Logout
    </button>
    {
      open &&
      <MessageModal setAction={() => setOpen(false)}>
      <>
        <h2 className="text-xl text-center mb-4">Do you want to log out?</h2>
        <button className="bg-blue-500 hover:bg-blue-400 text-white p-2 px-4 mx-auto rounded" onClick={handleLogout}>Log out</button>
      </>
    </MessageModal>
    }
    </>
  )
}