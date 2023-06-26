import Joi from 'joi'

const sortingOptions = ['name', 'color', 'tail_length', 'weight']
const orderOptions = ['asc', 'desc']

export const sortSchema = Joi.object({
  attribute: Joi.string()
    .empty('')
    .valid(...sortingOptions)
    .messages({
      'any.only': `Sorting option must be one of ${sortingOptions.join(', ')}`,
    }),
  order: Joi.string()
    .empty('')
    .valid(...orderOptions)
    .messages({
      'any.only': `Order must be one of ${orderOptions.join(', ')}`,
    }),
}).unknown()
