import { Asset } from "../../entities/asset"

export interface AssetRepositoryInterface {
  create: (asset: Asset) => Promise<Asset>
  findById: (id: string) => Promise<Asset | null>
  findByUnitId: (unitId: string) => Promise<Asset[]>
  getAll: () => Promise<Asset[]>
}
