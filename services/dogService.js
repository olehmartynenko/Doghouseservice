import { Dog } from '../models/index.js'

const createDog = async (name, color, tail_length, weight) => {
  const dog = await Dog.create({ name, color, tail_length, weight })
  return dog
}

const getDogs = async (paginate) => {
  const dogs = await Dog.findAll({
    limit: paginate.pageSize,
    offset: paginate.offset,
  })
  return dogs
}

export default { createDog, getDogs }