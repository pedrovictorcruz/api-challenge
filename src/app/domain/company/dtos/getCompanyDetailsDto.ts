import { GetUnitDetailsDTO } from "../../unit/dtos/getUnitDetailsDto"
import { User } from "../../user/entities/user"

export interface GetCompanyDetailsDTO {
  id?: string
  name: string
  users: User[]
  units: GetUnitDetailsDTO[]
}
