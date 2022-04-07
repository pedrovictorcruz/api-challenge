
import { Router } from 'express'
import UnitController from './controllers/unitController'

const router = Router()

const unitController = new UnitController()

router.get('/units', unitController.getAll)
router.post('/units', unitController.create)
router.get('/unit/:id', unitController.getDetails)

export { router as UnitRoutes}