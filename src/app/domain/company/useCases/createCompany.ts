import { CreateCompanyDTO } from "../dtos/createCompanyDto";
import { Company } from "../entities/company";
import { CompanyRepositoryInterface } from "../repositories/interfaces/companyRepositoryInterface";

export default class CreateCompanyUseCase {
  constructor (private readonly companyRepository: CompanyRepositoryInterface) {}
  
  async execute (companyDTO: CreateCompanyDTO): Promise<Company> {
    return await this.companyRepository.create(companyDTO)
  }
}