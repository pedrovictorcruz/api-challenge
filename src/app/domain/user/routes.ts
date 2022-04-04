
import { Router } from 'express'
import { jwtAuthenticator } from '../../web/server/auth/jwtAuth'
import { UserController } from './controllers/userController'

const router = Router()

const { authenticate: authenticateJWT } = jwtAuthenticator('jwt')

const userController = new UserController()

router.post('/users', userController.create)
// router.get('/users', userController.getUser)
router.post('/login', authenticateJWT)
router.get('/profile', authenticateJWT, (_req, res) => {
  res.send('secured Route')
})

export { router as UserRoutes}