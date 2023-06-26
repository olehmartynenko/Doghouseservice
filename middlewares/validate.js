import { ValidationError } from './errorHandler.js'

export default function validate(schema) {
  return async (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false })
    if (error) {
      const errorMessages = error.details
        .map((err) => err.message)
        .join(' and ')
      next(new ValidationError(errorMessages))
    } else {
      next()
    }
  }
}
