import { Request, Response } from "express";
import { CreateCompanyDTO } from "../dtos/createCompanyDto";
import { CompanyRepository } from "../repositories/companyRepository";
import CreateCompanyUseCase from "../useCases/createCompany";

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
}