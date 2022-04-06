import { Request, Response } from "express";
import { CreateUnitDTO } from "../dtos/createUnitDTO";
import { UnitRepository } from "../repositories/unitRepository";
import CreateUnitUseCase from "../useCases/createUnit";
import GetAllUnitsUseCase from "../useCases/getAllUnits";

export default class UnitController {
  async create(request: Request, response: Response) {
    const createUnitUseCase = new CreateUnitUseCase(new UnitRepository())

    try {
      const company = await createUnitUseCase.execute(request.body as CreateUnitDTO)
      
      return response.send(company)
    } catch (err: any) {
      return response.status(422).send({ message: err.message }) 
    }
  }

  async getAll(request: Request, response: Response) {
    const getAllUnitsUseCase = new GetAllUnitsUseCase(new UnitRepository())

    const units = await getAllUnitsUseCase.execute()

    return response.send(units)
  }
}