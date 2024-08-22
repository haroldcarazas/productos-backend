import { Router } from 'express'
import ExamenController from '../controllers/examen.controller.js'
import { validateId } from '../middlewares/middleware.js'
import { validateAlumno, validateJWT } from '../middlewares/auth.middleware.js'

const router = Router()

router.get('/curso/:id', validateJWT, validateId, ExamenController.getByCurso)
router.get('/:id', validateJWT, validateId, ExamenController.find)
router.post('/', validateJWT, validateAlumno, ExamenController.store)

export default router
