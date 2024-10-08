import { ColorPicker, IColor } from "react-color-palette"

interface ColorPickerProps {
  color: IColor,
  setColor: (color: IColor) => void
}

export default function BoardColorPicker({ color, setColor }: ColorPickerProps) {

  return (
    <div className="mt-4">
      <ColorPicker color={color} onChange={setColor} />
      <div style={{ backgroundColor: color.hex} } className="my-4 rounded w-full h-20"></div>
    </div>
  )
}