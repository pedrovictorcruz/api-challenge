import { User } from "../../entities/user"

export interface UserRepositoryInterface {
  create: (user: User) => Promise<User>
  find: (query: any) => Promise<any>
  findById: (id: string) => Promise<User | null>
  findByEmail: (email: string) => Promise<User | null>
}
