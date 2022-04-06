import { Asset } from "../entities/asset";
import { AssetRepositoryInterface } from "../repositories/interfaces/assetRepositoryInterface";

export default class GetAllAssetsUseCase {
  constructor (private readonly assetRepository: AssetRepositoryInterface) {}
  
  async execute (): Promise<Asset[]> {
    return await this.assetRepository.getAll()
  }
}