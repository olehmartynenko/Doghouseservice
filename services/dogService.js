import { Dog } from '../models/index.js'

const createDog = async (name, color, tail_length, weight) => {
    const dogWithSameName = await Dog.findOne({ where: { name } })
    if (dogWithSameName) {
      throw new ValidationError('Dog with same name already exists')
    }
    const dog = await Dog.create({ name, color, tail_length, weight })
    return dog
  }

const getDogs = async (paginate, sort) => {
  const dogs = await Dog.findAll({
    limit: paginate.pageSize,
    offset: paginate.offset,
    order: [[sort.attribute, sort.order]],
  })
  return dogs
}

export default { createDog, getDogs }
