import SideMenuLink from "./SideMenuLink"

export default function LinkBoard() {
  return (
    <div className="flex flex-col">
      <SideMenuLink name={"Home"} route={"/"} />
      <SideMenuLink name={"Boards"} route={"/boards"} />
    </div>
  )
}