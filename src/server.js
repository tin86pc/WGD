import express from 'express'

import 'dotenv/config'

import config from './config.js'

import routes from './route.js'

import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

config.viewEngine(app)

routes.initWeb(app)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
    console.log('http://127.0.0.1:' + PORT);
})
