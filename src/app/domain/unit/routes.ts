
import { Router } from 'express'
import UnitController from './controllers/unitController'

const router = Router()

const unitController = new UnitController()

router.get('/units', unitController.getAll)
router.post('/units', unitController.create)

export { router as UnitRoutes}