'use client' // Error components must be Client Components

import { useEffect } from 'react'

//this is a generic error component
// if any errors accors throughout the app then this is displayed

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="surface-container h-screen flex flex-col items-center justify-center">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
