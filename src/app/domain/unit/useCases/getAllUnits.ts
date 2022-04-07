import { AssetRepository } from "../../asset/repositories/assetRepository";
import { AssetRepositoryInterface } from "../../asset/repositories/interfaces/assetRepositoryInterface";
import { GetUnitDetailsDTO } from "../dtos/getUnitDetailsDto";
import { Unit } from "../entities/unit";
import { UnitRepositoryInterface } from "../repositories/interfaces/unitRepositoryInterface";

export default class GetAllUnitsUseCase {
  constructor (
    private readonly unitRepository: UnitRepositoryInterface
  ) {}
  
  async execute (): Promise<GetUnitDetailsDTO[]> {
    const units = await this.unitRepository.getAll()

    const assetRepository = new AssetRepository()

    const unitsDetails = await Promise.all(units.map(async (unit: Unit) => {
      const assets = await assetRepository.findByUnitId(unit.id as string)
      return {
        id: unit.id,
        companyId: unit.companyId,
        name: unit.name,
        assets: assets
      }
    }))

    return unitsDetails
  }
}