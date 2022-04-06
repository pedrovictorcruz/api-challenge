
import { Router } from 'express'
import AuthMiddleware from '../../middleware/auth'
import AssetController from './controllers/assetController'

const router = Router()

const assetController = new AssetController()

const authMiddleware = new AuthMiddleware()

router.get('/assets', assetController.getAll)
router.post('/assets', authMiddleware.handle, assetController.create)

export { router as AssetRoutes}