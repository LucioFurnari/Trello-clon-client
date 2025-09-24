
interface FieldsetProp {
  type: string,
  name: string,
  placeholder: string,
  errors: [],
  disabled: boolean
}

export default function Fieldset({ type, name, errors, placeholder, disabled }: FieldsetProp) {
  return (
    <fieldset>
      <input className="p-2 mt-3 border-b-2 w-full" disabled={disabled} type={type} placeholder={placeholder} name={name} id={name} />
      { 
        errors &&
        <ul className="mt-2">
          {
            errors
            .filter((error: any) => error.path === name)
            .map((error: any, index: number) => (
              <li className="text-red-600" key={index}>- {error.msg}</li>
            )) 
          }
        </ul>
      }
    </fieldset>
  )
}