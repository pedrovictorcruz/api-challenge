import { Unit } from "../../entities/unit"

export interface UnitRepositoryInterface {
  create: (unit: Unit) => Promise<Unit>
  findById: (id: string) => Promise<Unit | null>
  getAll: () => Promise<Unit[]>
}
