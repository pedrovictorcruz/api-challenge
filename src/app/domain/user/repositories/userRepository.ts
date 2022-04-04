import { Model } from 'mongoose'
import { UserModel } from '../../../../infrastructure/mongodb/models/user'
import { CreateUserDTO } from '../dtos/createUserDto'
import { User } from '../entities/user'
import { UserRepositoryInterface } from './interfaces/userRepositoryInterface'

export type UserDocument = User & Document

export class UserRepository implements UserRepositoryInterface {
  private readonly model: Model<UserDocument>

  constructor () {
    this.model = UserModel
  }

  async create (createUserDto: CreateUserDTO): Promise<User> {
    const userDoc = new UserModel({
      email: createUserDto.email,
      password: createUserDto.password
    })

    const result = await userDoc.save()
    return result
  }

  async find (query: any): Promise<any> {
    if (query?.id) {
      query._id = query.id
      delete query.id
    }

    const result = await this.model.find(query)

    if (result.length === 1) {
      return result[0]
    }

    return result
  };
}
