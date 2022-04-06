import { Model } from 'mongoose'
import { CompanyModel } from '../../../infrastructure/database/schemas/company'
import { CreateCompanyDTO } from '../dtos/createCompanyDto'
import { Company } from '../entities/company'
import { CompanyRepositoryInterface } from './interfaces/companyRepositoryInterface'

export type CompanyDocument = Company & Document

export class CompanyRepository implements CompanyRepositoryInterface {
  private readonly model: Model<CompanyDocument>

  constructor () {
    this.model = CompanyModel
  }
  async create (createCompanyDto: CreateCompanyDTO): Promise<Company> {
    const companyDoc = new CompanyModel({
      name: createCompanyDto.name,
    })

    const result = await companyDoc.save()
    return result
  }

  async findById (id: string): Promise<Company | null> {
    return this.model.findById(id)
  }

  async getAll(): Promise<Company[]> {
    return this.model.find()
  }
}
