
import { Router } from 'express'
import CompanyController from './controllers/companyController'

const router = Router()

const companyController = new CompanyController()

router.get('/companies', companyController.getAll)
router.post('/companies', companyController.create)
router.get('/company/:id', companyController.getDetail)

export { router as CompanyRoutes}