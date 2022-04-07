import { Request, Response } from "express";
import { AssetRepository } from "../../asset/repositories/assetRepository";
import { UnitRepository } from "../../unit/repositories/unitRepository";
import { UserRepository } from "../../user/repositories/userRepository";
import { CreateCompanyDTO } from "../dtos/createCompanyDto";
import { CompanyRepository } from "../repositories/companyRepository";
import CreateCompanyUseCase from "../useCases/createCompany";
import GetAllCompaniesUseCase from "../useCases/getAllCompanies";
import GetCompanyDetails from "../useCases/getCompanyDetails";

export default class CompanyController {
  async create(request: Request, response: Response) {
    const createCompanyUseCase = new CreateCompanyUseCase(new CompanyRepository())

    try {
      const company = await createCompanyUseCase.execute(request.body as CreateCompanyDTO)
      
      return response.send(company)
    } catch (err: any) {
      return response.status(422).send({ message: err.message }) 
    }
  }

  async getAll(response: Response) {
    const getAllCompaniesUseCase = new GetAllCompaniesUseCase(new CompanyRepository())

    const companies = await getAllCompaniesUseCase.execute()

    return response.send(companies)
  }

  async getDetail(request: Request, response: Response) {
    try {
      const getCompanyDetailsUseCase = new GetCompanyDetails(
        new CompanyRepository(),
        new UserRepository(),
        new UnitRepository(),
        new AssetRepository()
      )

      const details = await getCompanyDetailsUseCase.execute(request.params["id"] as string)

      return response.send(details)
    } catch (err: any) {
      return response.status(422).send({ message: err.message }) 
    }
  }
}