import { ColorPicker, IColor } from "react-color-palette"
import { useState } from "react"

interface ColorPickerProps {
  color: IColor,
  setColor: (color: IColor) => void
}

export default function BoardColorPicker({ color, setColor }: ColorPickerProps) {
  const [open, setOpen] = useState(false);

  function openColorPicker() {
    setOpen(true);
  }

  function closeColorPicker() {
    setOpen(false);
  }

  return (
    <div>
      <button className="p-2 bg-slate-400/50 hover:bg-slate-300/50 rounded" onClick={openColorPicker}>Background color</button>
      {
        open && 
        <>
        <button className="ml-6 p-2 hover:bg-slate-300/50 rounded" onClick={closeColorPicker}>Cancel</button>
        <div className="mt-4">
          <ColorPicker color={color} onChange={setColor} />
          <div style={{ backgroundColor: color.hex} } className="my-4 rounded w-full h-20"></div>
        </div>
        </>
      }
    </div>
  )
}