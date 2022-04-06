import { Company } from "../entities/company";
import { CompanyRepositoryInterface } from "../repositories/interfaces/companyRepositoryInterface";

export default class GetAllCompaniesUseCase {
  constructor (private readonly companyRepository: CompanyRepositoryInterface) {}
  
  async execute (): Promise<Company[]> {
    return await this.companyRepository.getAll()
  }
}