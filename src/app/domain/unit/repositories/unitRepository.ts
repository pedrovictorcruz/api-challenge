import { Model } from 'mongoose'
import { UnitModel } from '../../../infrastructure/database/schemas/unit'
import { CreateUnitDTO } from '../dtos/createUnitDTO'
import { Unit } from '../entities/unit'
import { UnitRepositoryInterface } from './interfaces/unitRepositoryInterface'

export type UnitDocument = Unit & Document

export class UnitRepository implements UnitRepositoryInterface {
  private readonly model: Model<UnitDocument>

  constructor () {
    this.model = UnitModel
  }
  async create (createUnitDto: CreateUnitDTO): Promise<Unit> {
    const unitDoc = new UnitModel({
      name: createUnitDto.name,
      companyId: createUnitDto.companyId
    })

    const result = await unitDoc.save()
    return result
  }

  async findById (id: string): Promise<Unit | null> {
    return this.model.findById(id)
  }

  async getAll(): Promise<Unit[]> {
    return this.model.find()
  }

  async findByCompanyId(companyId: string): Promise<Unit[]> {
    return this.model.find({ companyId: companyId })
  }
}
