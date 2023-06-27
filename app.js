import express from 'express'
import errorHandler, { invalidPathHandler } from './middlewares/errorHandler.js'
import db from './models/index.js'
const { sequelize } = db
import router from './routes/index.js'
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use('/', router)
app.use(invalidPathHandler)
app.use(errorHandler)

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  try {
    await sequelize.sync()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.log(error)
  }
})
