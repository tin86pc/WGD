import express from 'express'

import { } from 'dotenv/config'

import configViewEngine from './configs/viewEngine.js'

import initWebRoutes from './routes/web.js'

const app = express()
configViewEngine(app)
initWebRoutes(app)


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
})
