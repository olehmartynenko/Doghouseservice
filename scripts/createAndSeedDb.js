import config from '../config/db.js'
import db from '../models/index.js'
import { generateDogs } from '../utils/generateDogs.js'
const { Sequelize, sequelize } = db

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

    const dogs = generateDogs(100)

    await sequelize.getQueryInterface().bulkInsert('dogs', dogs)

    await sequelize.close()
  }
}

createDb()
