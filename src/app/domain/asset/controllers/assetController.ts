import { Request, Response } from "express";
import { CreateAssetDTO } from "../dtos/createAssetDto";
import { AssetRepository } from "../repositories/assetRepository";
import CreateAssetUseCase from "../useCases/createAsset";
import GetAllAssetsUseCase from "../useCases/getAllAssets";

export default class AssetController {
  async create(request: Request, response: Response) {
    const createAssetUseCase = new CreateAssetUseCase(new AssetRepository())

    try {
      const company = await createAssetUseCase.execute(request.body as CreateAssetDTO)
      
      return response.send(company)
    } catch (err: any) {
      return response.status(422).send({ message: err.message }) 
    }
  }

  async getAll(response: Response) {
    const getAllAssetsUseCase = new GetAllAssetsUseCase(new AssetRepository())

    const units = await getAllAssetsUseCase.execute()

    return response.send(units)
  }
}