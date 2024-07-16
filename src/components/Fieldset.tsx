
interface FieldsetProp {
  type: string,
  name: string,
  errors: []
}

export default function Fieldset({ type, name, errors }: FieldsetProp) {
  return (
    <fieldset>
      <input className="p-2 mt-3 border-b-2 w-full" type={type} placeholder="email" name={name} id={name} />
      { 
        errors
          .filter((error: any) => error.path === name)
          .map((error: any, index: number) => (
            <span key={index}>{error.msg}</span>
          )) 
      }
    </fieldset>
  )
}