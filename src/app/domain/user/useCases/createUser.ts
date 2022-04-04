import { CreateUserDTO } from '../dtos/createUserDto'
import { User } from '../entities/user'
import { UserRepositoryInterface } from '../repositories/interfaces/userRepositoryInterface'

export class CreateUserUseCase {
  constructor (private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute (userDTO: CreateUserDTO): Promise<User> {
    return await this.userRepository.create(userDTO)
  }
}
