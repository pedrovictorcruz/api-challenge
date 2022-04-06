
import { Router } from 'express'
import AuthMiddleware from '../../middleware/auth'
import { LoginController } from './controllers/loginController'
import { UserController } from './controllers/userController'

const router = Router()


const userController = new UserController()
const loginController = new LoginController()

const authMiddleware = new AuthMiddleware()

router.post('/users', userController.create)
router.get('/users', authMiddleware.handle, function(req, res) {
  return res.send(req.user)
});
router.post('/login', loginController.login)

export { router as UserRoutes}