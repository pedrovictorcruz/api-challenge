import { Asset } from "../entities/asset";
import { AssetRepositoryInterface } from "../repositories/interfaces/assetRepositoryInterface";

export default class GetDetailAssetUseCase {
  constructor (private readonly assetRepository: AssetRepositoryInterface) {}
  
  async execute (id: string): Promise<Asset> {
    const asset = await this.assetRepository.findById(id)

    if (!asset) throw Error('Maquina não encontrada')
    
    return asset
  }
}