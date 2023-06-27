import { Router } from 'express'
import { ping } from '../controllers/pingController.js'
import dogRoutes from './dogRoutes.js'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json' assert { type: "json" }

const router = Router()

router.use('/', dogRoutes)

router.get('/ping', ping)

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router
