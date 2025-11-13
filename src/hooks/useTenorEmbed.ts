import { useEffect } from 'react'

export function useTenorEmbed() {
  useEffect(() => {
    // Remove any existing script tag to avoid duplicates
    const oldScript = document.querySelector(
      'script[src="https://tenor.com/embed.js"]',
    )
    if (oldScript) oldScript.remove()

    // Create a new script tag
    const script = document.createElement('script')
    script.src = 'https://tenor.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    // Optional cleanup (not strictly needed)
    return () => {
      script.remove()
    }
  }, [])
}
