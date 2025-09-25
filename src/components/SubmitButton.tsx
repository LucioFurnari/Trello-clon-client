
'use client'
import { useFormStatus } from 'react-dom'

export function SubmitButton({buttonText}:{buttonText:string}) {
  const { pending } = useFormStatus()
  return (
    <>
    <button
      type="submit"
      className="btn-primary bg-blue-600 p-2 hover:bg-blue-500 font-semibold text-lg"
      disabled={pending}
    >
      {buttonText}
    </button>
    {pending ? (
      <div className='mx-auto my-4'>
        <span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500 inline-block mr-2"></span>
      </div>
      ) : null}
    </>
  )
}