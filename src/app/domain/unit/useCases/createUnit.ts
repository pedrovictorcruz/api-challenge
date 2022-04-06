import { CreateUnitDTO } from "../dtos/createUnitDTO";
import { Unit } from "../entities/unit";
import { UnitRepositoryInterface } from "../repositories/interfaces/unitRepositoryInterface";

export default class CreateUnitUseCase {
  constructor (private readonly unitRepository: UnitRepositoryInterface) {}
  
  async execute (unitDTO: CreateUnitDTO): Promise<Unit> {
    return await this.unitRepository.create(unitDTO)
  }
}