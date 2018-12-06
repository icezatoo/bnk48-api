import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/api/data', (req, res) => {
  res.json({ message: 'hello' })
})

export const start = () => {
  app.listen(config.port, () => {
    console.log(`REST API on http://localhost:${config.port}/api`)
  })
}
