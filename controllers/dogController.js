import dogService from '../services/dogService.js'

export const createDog = async (req, res, next) => {
  const { name, color, tail_length, weight } = req.body
  try {
    const dog = await dogService.createDog(name, color, tail_length, weight)
    return res.send(dog)
  } catch (err) {
    next(err)
  }
}

export const getDogs = async (req, res, next) => {
  const { paginate, sort } = req
  try {
    const dogs = await dogService.getDogs(paginate, sort)
    return res.send(dogs)
  } catch (err) {
    next(err)
  }
}
