import express from 'express'
import errorHandler, { invalidPathHandler } from './middlewares/errorHandler.js'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(invalidPathHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
