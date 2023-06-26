import { Sequelize } from 'sequelize'
import config from '../config/db.js'
import DogModel from './dog.js'

const sequelize = new Sequelize(config)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.Dog = DogModel(sequelize, Sequelize)

export const Dog = db.Dog

export default db
