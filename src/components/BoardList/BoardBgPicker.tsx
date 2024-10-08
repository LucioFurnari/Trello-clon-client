import { IColor } from "react-color-palette"
import BoardColorPicker from "./BoardColorPicker"
import BoardImagePicker from "./BoardImagePicker"
import { useState } from "react";

interface BoardBgProps {
  color: IColor,
  setColor: (color: IColor) => void
}

export default function BoardBgPicker({ color, setColor }: BoardBgProps) {
  const [open, setOpen] = useState({
    openColor: false,
    openBg: false
  });


  function openColorPicker() {
    setOpen({...open, openColor: true, openBg: false});
  }

  function closeColorPicker() {
    setOpen({...open, openColor: false});
  }

  function openImagePicker() {
    setOpen({...open, openBg: true, openColor: false});
  }

  function closeImagePicker() {
    setOpen({...open, openBg: false});
  }

  return (
    <div>
      <button type="button" className="p-2 bg-slate-400/50 hover:bg-slate-300/50 rounded" onClick={openColorPicker}>Background color</button>
      <button type="button" className="p-2 ml-6 bg-slate-400/50 hover:bg-slate-300/50 rounded" onClick={openImagePicker}>Image background</button>
      {
        open.openColor &&
        <>
          <BoardColorPicker color={color} setColor={setColor}/>
          <button className="bg-slate-400 hover:bg-slate-400/50 p-2 px-6 rounded float-end" onClick={closeColorPicker}>Cancel</button>
        </>
      }
      {
        open.openBg && 
        <>
          <BoardImagePicker />
          <button className="bg-slate-400 hover:bg-slate-400/50 p-2 px-6 rounded float-end" onClick={closeImagePicker}>Cancel</button>
        </>
      }
    </div>
  )
}