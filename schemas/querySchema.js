import Joi from 'joi'

const sortingOptions = ['name', 'color', 'tail_length', 'weight']
const orderOptions = ['asc', 'desc']

export const querySchema = Joi.object({
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
  pageNumber: Joi.number().empty('').integer().min(1).messages({
    'number.min': 'Page number must be greater than or equal to 1',
  }),
  pageSize: Joi.number().empty('').integer().min(1).messages({
    'number.min': 'Page size must be greater than or equal to 1',
  }),
}).messages({
  'object.unknown': 'Query parameter not allowed',
})
