import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'

const className = css`
  font-family: sans-serif;
`

export default createRoute(async (c) => {
  const name = c.req.query('name') ?? 'Hono'
  const result = await fetch(`${c.req.url}api`)
  const {message} = await result.json<{message: string}>()
  return c.render(
    <div class={className}>
      <h1>Hello, {name}!</h1>
      <h2>{message}</h2>
      <Counter />
    </div>,
    { title: name }
  )
})
