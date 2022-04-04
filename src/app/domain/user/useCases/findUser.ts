import { User } from '../entities/user'
import { UserRepositoryInterface } from '../repositories/interfaces/userRepositoryInterface'

export class FindUserUseCase {
  constructor (private readonly userRepository: UserRepositoryInterface
  ) { }

  async execute (query: any): Promise<User> {
    return await this.userRepository.find(query)
  }
}
