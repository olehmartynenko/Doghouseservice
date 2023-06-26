import { Router } from 'express'
import { ping } from '../controllers/pingController.js'
import dogRoutes from './dogRoutes.js'

const router = Router()

router.use('/', dogRoutes)

router.get('/ping', ping)

export default router
