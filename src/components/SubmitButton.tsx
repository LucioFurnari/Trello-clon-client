
export function SubmitButton({disabled}:{disabled: boolean}) {

  return (
    <button className="py-2 rounded mt-4 bg-blue-700 hover:bg-blue-600 text-white" type="submit" disabled={disabled}>Submit</button>
  )
}