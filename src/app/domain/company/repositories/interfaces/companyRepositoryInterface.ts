import { Company } from "../../entities/company"

export interface CompanyRepositoryInterface {
  create: (company: Company) => Promise<Company>
  findById: (id: string) => Promise<Company | null>
  getAll: () => Promise<Company[]>
}
