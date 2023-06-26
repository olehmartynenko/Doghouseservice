import { Router } from 'express'
import { createDog } from '../controllers/dogController.js'

const router = Router()

router.post('/dog', createDog)

export default router
