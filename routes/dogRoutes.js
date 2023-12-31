import { Router } from 'express'
import { createDog, getDogs } from '../controllers/dogController.js'
import { dogSchema } from '../schemas/dogSchema.js'
import { querySchema } from '../schemas/querySchema.js'
import validate from '../middlewares/validate.js'
import paginate from '../middlewares/paginate.js'
import sort from '../middlewares/sort.js'

const router = Router()

router.post('/dog', validate(dogSchema), createDog)

router.get('/dogs', validate(querySchema, 'query'), sort, paginate, getDogs)

export default router
