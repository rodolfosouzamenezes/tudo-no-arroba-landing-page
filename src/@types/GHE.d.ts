import { IBaseEntity } from './response'

export interface IGHE extends IBaseEntity {
  name: string
  description?: string
  risks?: string[]
  employeesIds?: string[]
  occupationsIds: string[]
  productsDetailsIds: string[]
}
