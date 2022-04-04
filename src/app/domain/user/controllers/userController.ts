import { Request, Response } from "express"
import { CreateUserDTO } from "../dtos/createUserDto"
import { UserRepository } from "../repositories/userRepository"
import { CreateUserUseCase } from "../useCases/createUser"

export class UserController {
  private readonly createUserUseCase: CreateUserUseCase

  constructor () {
    const userRepository = new UserRepository()
    this.createUserUseCase = new CreateUserUseCase(userRepository)
  }

  async create (request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.createUserUseCase.execute(request.body as CreateUserDTO)
      return response.send(user)
    } catch (e) {
      return response.send(e)
    }
  }
}
