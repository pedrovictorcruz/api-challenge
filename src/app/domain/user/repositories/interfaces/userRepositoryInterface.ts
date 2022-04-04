import { User } from "../../entities/user"

export interface UserRepositoryInterface {
  create: (user: User) => Promise<User>
  find: (query: any) => Promise<any>
  findByEmail: (email: string) => Promise<User | null>
}
