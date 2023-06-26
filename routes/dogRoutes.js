import { Router } from 'express'
import { createDog, getDogs } from '../controllers/dogController.js'
import { dogSchema } from '../schemas/dogSchema.js'
import validate from '../middlewares/validate.js'
import paginate from '../middlewares/paginate.js'

const router = Router()

router.post('/dog', validate(dogSchema), createDog)

router.get('/dogs', paginate, getDogs)

export default router
