import db from '../models/index.js'
const { Sequelize, sequelize } = db
import config from '../config/db.js'

const createDb = async () => {
  const rootSequelize = new Sequelize({
    host: config.host,
    password: config.password,
    username: config.username,
    dialect: config.dialect,
  })
  try {
    await rootSequelize.query(`CREATE DATABASE ${config.database}`)
    console.log('Database created')
  } catch (error) {
    console.log(error)
  } finally {
    await rootSequelize.close()
    
    await sequelize.sync()
    await sequelize.close()
  }
}

createDb()
