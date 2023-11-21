import express from 'express'

import { } from 'dotenv/config'

import configViewEngine from './configs/viewEngine.js'

import initWebRoutes from './routes/web.js'

import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


configViewEngine(app)
initWebRoutes(app)



const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
})
