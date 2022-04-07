
import { Router } from 'express'
import AuthMiddleware from '../../middleware/auth'
import AssetController from './controllers/assetController'

const router = Router()

const assetController = new AssetController()

router.get('/assets', assetController.getAll)
router.post('/assets', assetController.create)
router.get('/asset/:id', assetController.getDetail)

export { router as AssetRoutes}