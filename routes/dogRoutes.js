import { Router } from 'express'
import { createDog, getDogs } from '../controllers/dogController.js'
import { dogSchema } from '../schemas/dogSchema.js'
import validate from '../middlewares/validate.js'

const router = Router()

router.post('/dog', validate(dogSchema), createDog)

router.get('/dogs', getDogs)

export default router
