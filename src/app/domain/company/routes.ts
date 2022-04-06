
import { Router } from 'express'
import CompanyController from './controllers/companyController'

const router = Router()

const companyController = new CompanyController()

router.post('/companies', companyController.create)

export { router as CompanyRoutes}