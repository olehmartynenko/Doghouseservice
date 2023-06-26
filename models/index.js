import { Sequelize } from 'sequelize'
import config from '../config/db.js'

const sequelize = new Sequelize(config)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

export default db
