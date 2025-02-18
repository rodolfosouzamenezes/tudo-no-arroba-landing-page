import { IBaseEntity } from './response'

export interface IOccupation extends IBaseEntity {
  name: string
  description?: string
  CBO?: string
}

export interface IOccupationSelectOption {
  _id: string
  name: string
}
