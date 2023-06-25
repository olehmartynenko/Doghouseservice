import express from 'express'
import errorHandler, { invalidPathHandler } from './middlewares/errorHandler.js'
import router from './routes/index.js'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use(router)
app.use(invalidPathHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
