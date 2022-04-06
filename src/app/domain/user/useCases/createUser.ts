import { MongoErrorsCode } from '../../../infrastructure/database/enuns/errors'
import { CreateUserDTO } from '../dtos/createUserDto'
import { User } from '../entities/user'
import { UserRepositoryInterface } from '../repositories/interfaces/userRepositoryInterface'

export class CreateUserUseCase {
  constructor (private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute (userDTO: CreateUserDTO): Promise<User> {
    try {
      return await this.userRepository.create(userDTO)
    } catch (err: any) {
      if (err.code === MongoErrorsCode.DuplicateError) {
        throw new Error('E-mail já cadastrado')
      }
      
      throw err
    }
  }
}
