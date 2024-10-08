'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h1>{error.message || 'Something went wrong'}</h1>
      <button onClick={reset}>Try again</button>
    </div>
  )
}