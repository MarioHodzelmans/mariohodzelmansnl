'use client'

import posthog from 'posthog-js'
import { useEffect } from 'react'

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    posthog.captureException(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <main>
          <h1>Something went wrong</h1>
          <p>An unexpected error occurred. Please try again.</p>
          <button type="button" onClick={() => window.location.reload()}>
            Reload page
          </button>
        </main>
      </body>
    </html>
  )
}
