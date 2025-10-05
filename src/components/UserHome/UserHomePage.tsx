import SideMenu from "./SideMenu/SideMenu"
import { getAllWorkspacesOfUser } from "@/lib/workspace"

export default async function UserHomePage() {
  const workspace_list = await getAllWorkspacesOfUser();

  return (
    <>
      <SideMenu workspaces={workspace_list} />
    </>
  )
}