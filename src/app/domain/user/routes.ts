
import { Router } from 'express'
import { jwtAuthenticator } from '../../server/auth/jwtAuth'
import { LoginController } from './controllers/loginController'
import { UserController } from './controllers/userController'

const router = Router()

const { authenticate: authenticateJWT } = jwtAuthenticator('jwt')

const userController = new UserController()
const loginController = new LoginController()

router.post('/users', userController.create)
// router.get('/users', userController.getUser)
router.post('/login', loginController.login)
router.get('/profile', authenticateJWT, (_req, res) => {
  res.send('secured Route')
})

export { router as UserRoutes}