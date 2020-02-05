import express from 'express'
const app = express()
import {databaseConnect} from './database'
import config from './config'

databaseConnect()

app.get('/', (req, res) => res.send('Welcome to Express'))

const port = config.port

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`))
