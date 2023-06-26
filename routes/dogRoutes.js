import { Router } from 'express'
import { createDog } from '../controllers/dogController.js'
import { dogSchema } from '../schemas/dogSchema.js'
import validate from '../middlewares/validate.js'

const router = Router()

router.post('/dog', validate(dogSchema), createDog)

export default router
