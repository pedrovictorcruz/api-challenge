import { CreateAssetDTO } from "../dtos/createAssetDto";
import { Asset } from "../entities/asset";
import { AssetRepositoryInterface } from "../repositories/interfaces/assetRepositoryInterface";

export default class CreateAssetUseCase {
  constructor (private readonly assetRepository: AssetRepositoryInterface) {}
  
  async execute (assetDTO: CreateAssetDTO): Promise<Asset> {
    return await this.assetRepository.create(assetDTO)
  }
}