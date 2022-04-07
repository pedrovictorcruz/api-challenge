import { Asset } from "../../asset/entities/asset"

export interface GetUnitDetailsDTO {
  id?: string
  companyId: string
  name: string
  assets: Asset[]
}
