import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

const app = createApp()

app.get('/api', async c => {
    return c.json({
        message: 'hello'
    })
})

showRoutes(app)


export default app
