import { User } from "../../entities/user"

export interface UserRepositoryInterface {
  create: (user: User) => Promise<User>
  findById: (id: string) => Promise<User | null>
  findByEmail: (email: string) => Promise<User | null>
  findByCompanyId: (companyId: string) => Promise<User[]>
}
