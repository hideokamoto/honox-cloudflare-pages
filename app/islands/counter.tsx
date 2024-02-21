import { useState } from 'hono/jsx'

export default function Counter() {
  const [message, setMessage] = useState("")
  return (
    <div>
      <p>{message}</p>
      <button onClick={async () => {
        const result = await fetch('/api')
        const data = await result.json<{message: string}>()
        setMessage(data.message)
      }}>Fetch</button>
    </div>
  )
}