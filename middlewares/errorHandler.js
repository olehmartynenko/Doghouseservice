class BaseError extends Error {
  constructor(message, statusCode, name) {
    super(message)
    this.statusCode = statusCode
    this.name = name
  }
}

export class NotFoundError extends BaseError {
  constructor(message = 'Resource not found') {
    super(message, 404, 'NotFoundError')
  }
}

export class ValidationError extends BaseError {
  constructor(message = 'Invalid data provided') {
    super(message, 400, 'ValidationError')
  }
}

export const invalidPathHandler = (req, res, next) => {
  next(new NotFoundError('Path not found'))
}

export default function errorHandler(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      status: err.statusCode,
      name: err.name,
      message: err.message,
    })
  } else {
    console.error(err)
    return res.status(500).json({
      status: 500,
      name: 'InternalServerError',
      message: 'An unexpected error occurred',
    })
  }
}
