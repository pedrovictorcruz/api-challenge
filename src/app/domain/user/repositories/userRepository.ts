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
  async find (query: any): Promise<any> {
    
  }

  async create (createUserDto: CreateUserDTO): Promise<User> {
    const userDoc = new UserModel({
      email: createUserDto.email,
      password: createUserDto.password
    })

    const result = await userDoc.save()
    return result
  }

  async findByEmail (email: string): Promise<User | null> {
    return this.model.findOne({ email: email }).select('+password')
  }
}
