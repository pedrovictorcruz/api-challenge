import { Request, Response } from "express"
import { CreateUserDTO } from "../dtos/createUserDto"
import { UserRepository } from "../repositories/userRepository"
import { CreateUserUseCase } from "../useCases/createUser"

export class UserController {
  async create (request: Request, response: Response): Promise<Response> {
    const createUserUseCase = new CreateUserUseCase(new UserRepository())

    const user = await createUserUseCase.execute(request.body as CreateUserDTO)
    return response.send(user)
  }
}
