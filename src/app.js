import express from 'express'
import bodyParser from 'body-parser'
const app = express()
import {databaseConnect} from './database'
import config from './config'
import { router } from './router'

databaseConnect()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', router)

const port = config.port

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`))
