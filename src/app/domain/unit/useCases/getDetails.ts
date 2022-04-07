import { AssetRepository } from "../../asset/repositories/assetRepository";
import { GetUnitDetailsDTO } from "../dtos/getUnitDetailsDto";
import { UnitRepositoryInterface } from "../repositories/interfaces/unitRepositoryInterface";

export default class GetUnitDetailsUseCase {
  constructor (private readonly unitRepository: UnitRepositoryInterface) {}
  
  async execute (unitId: string): Promise<GetUnitDetailsDTO> {
    const unit = await this.unitRepository.findById(unitId)

    if (!unit) throw Error('Unidade não encontrada')

    const assetRepository = new AssetRepository()

    const assets = await assetRepository.findByUnitId(unitId)

    return {
      id: unit.id,
      companyId: unit.companyId,
      name: unit.name,
      assets: assets
    }
  }
}