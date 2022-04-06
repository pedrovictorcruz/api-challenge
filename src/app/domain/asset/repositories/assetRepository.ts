import { Model } from 'mongoose'
import { AssetModel } from '../../../infrastructure/database/schemas/asset'
import { CreateAssetDTO } from '../dtos/createAssetDto'
import { Asset } from '../entities/asset'
import { AssetRepositoryInterface } from './interfaces/assetRepositoryInterface'

export type AssetDocument = Asset & Document

export class AssetRepository implements AssetRepositoryInterface {
  private readonly model: Model<AssetDocument>

  constructor () {
    this.model = AssetModel
  }
  async create (createAssetDto: CreateAssetDTO): Promise<Asset> {
    const unitDoc = new AssetModel({
      name: createAssetDto.name,
      model: createAssetDto.model,
      image: createAssetDto.image,
      description: createAssetDto.description,
      status: createAssetDto.status,
      health: createAssetDto.health,
      owner: createAssetDto.owner,
      unitId: createAssetDto.unitId
    })

    const result = await unitDoc.save()
    return result
  }

  async findById (id: string): Promise<Asset | null> {
    return this.model.findById(id)
  }

  async getAll(): Promise<Asset[]> {
    return this.model.find()
  }
}
