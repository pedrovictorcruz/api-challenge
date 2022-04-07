import { Request, Response } from "express";
import { UnitRepository } from "../repositories/unitRepository";
import CreateUnitUseCase from "../useCases/createUnit";
import GetAllUnitsUseCase from "../useCases/getAllUnits";
import GetDetailsUseCase from "../useCases/getDetails";

export default class UnitController {
  async create(request: Request, response: Response) {
    const createUnitUseCase = new CreateUnitUseCase(new UnitRepository())

    try {
      const unit = await createUnitUseCase.execute(request.body)
      
      return response.send(unit)
    } catch (err: any) {
      return response.status(422).send({ message: err.message }) 
    }
  }

  async getAll(_request: Request, response: Response) {
    const getAllUnitsUseCase = new GetAllUnitsUseCase(new UnitRepository())

    const units = await getAllUnitsUseCase.execute()

    return response.send(units)
  }

  async getDetails(request: Request, response: Response) {
    const getDetailsUseCase = new GetDetailsUseCase(new UnitRepository())

    try {
      const details = await getDetailsUseCase.execute(request.params['id'] as string)

      return response.send(details)
    } catch (err: any) {
      return response.status(422).send({ message: err.message }) 
    }
  }
}