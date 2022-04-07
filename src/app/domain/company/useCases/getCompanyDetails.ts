import { AssetRepositoryInterface } from "../../asset/repositories/interfaces/assetRepositoryInterface";
import { Unit } from "../../unit/entities/unit";
import { UnitRepositoryInterface } from "../../unit/repositories/interfaces/unitRepositoryInterface";
import { UserRepositoryInterface } from "../../user/repositories/interfaces/userRepositoryInterface";
import { GetCompanyDetailsDTO } from "../dtos/getCompanyDetailsDto";
import { CompanyRepositoryInterface } from "../repositories/interfaces/companyRepositoryInterface";

export default class GetCompanyDetails {
  constructor (
    private readonly companyRepository: CompanyRepositoryInterface,
    private readonly userRepository: UserRepositoryInterface,
    private readonly unitRepository: UnitRepositoryInterface,
    private readonly assetRepository: AssetRepositoryInterface
  ) {}
  
  async execute (companyId: string): Promise<GetCompanyDetailsDTO> {
    const company = await this.companyRepository.findById(companyId)

    if (! company) throw Error('Empresa não encontrada')

    const users = await this.userRepository.findByCompanyId(companyId)

    const units = await this.unitRepository.findByCompanyId(companyId)

    const unitsDetails = await Promise.all(units.map(async (unit: Unit) => {
      const assets = await this.assetRepository.findByUnitId(unit.id as string)
      return {
        id: unit.id,
        companyId: unit.companyId,
        name: unit.name,
        assets: assets
      }
    }))

    return {
      id: company.id,
      name: company.name,
      users: users,
      units: unitsDetails
    }

  }
}