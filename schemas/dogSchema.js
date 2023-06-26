import Joi from 'joi'

export const dogSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Name is required',
    'string.empty': 'Name is required',
  }),
  color: Joi.string().required().messages({
    'any.required': 'Color is required',
    'string.empty': 'Color is required',
  }),
  tail_length: Joi.number().required().min(0).messages({
    'any.required': 'Tail length is required',
    'number.min': 'Tail length must be greater than or equal to 0',
  }),
  weight: Joi.number().required().min(0).messages({
    'any.required': 'Weight is required',
    'number.min': 'Weight must be greater than or equal to 0',
  }),
})
