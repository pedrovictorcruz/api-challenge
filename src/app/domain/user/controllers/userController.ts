import { Request, Response } from "express"
import { UserRepository } from "../repositories/userRepository"
import { CreateUserUseCase } from "../useCases/createUser"

export class UserController {
  async create (request: Request, response: Response): Promise<Response> {
    const createUserUseCase = new CreateUserUseCase(new UserRepository())

    try {
      await createUserUseCase.execute(request.body)

      return response.status(200)
    } catch (err: any) {
      return response.status(422).send({ message: err.message }) 
    }
  }
}
