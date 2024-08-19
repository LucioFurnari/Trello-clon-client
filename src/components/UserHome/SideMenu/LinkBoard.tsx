import SideMenuLink from "./SideMenuLink"

export default function LinkBoard() {
  return (
    <div className="flex flex-col">
      <SideMenuLink name={"Home"} route={"/user"} />
      <SideMenuLink name={"Boards"} route={"/user/boards"} />
    </div>
  )
}