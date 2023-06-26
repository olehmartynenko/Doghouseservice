import { Dog } from '../models/index.js'

const createDog = async (name, color, tail_length, weight) => {
  const dog = await Dog.create({ name, color, tail_length, weight })
  return dog
}

export default { createDog }
