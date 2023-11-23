import express from 'express'

import { } from 'dotenv/config'

import config from './config.js'

import Routes from './routes.js'

import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


config.viewEngine(app)
Routes.initWebRoutes(app)



const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
})
