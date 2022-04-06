import { Unit } from "../entities/unit";
import { UnitRepositoryInterface } from "../repositories/interfaces/unitRepositoryInterface";

export default class GetAllUnitsUseCase {
  constructor (private readonly unitRepository: UnitRepositoryInterface) {}
  
  async execute (): Promise<Unit[]> {
    return await this.unitRepository.getAll()
  }
}