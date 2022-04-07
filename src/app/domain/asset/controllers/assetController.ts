import { Request, Response } from "express";
import { CreateAssetDTO } from "../dtos/createAssetDto";
import { AssetRepository } from "../repositories/assetRepository";
import CreateAssetUseCase from "../useCases/createAsset";
import GetAllAssetsUseCase from "../useCases/getAllAssets";
import GetDetailAssetUseCase from "../useCases/getDetailsAsset";

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

  async getDetail(request: Request, response: Response) {
    const getDetailAssetUseCase = new GetDetailAssetUseCase(new AssetRepository())

    try {
      const asset = await getDetailAssetUseCase.execute(request.params['id'])

      return response.send(asset)
    } catch (err: any) {
      return response.status(422).send({ message: err.message }) 
    }
  }
}