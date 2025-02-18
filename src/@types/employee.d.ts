import { IAccessGroupResponse } from './accessGroup'
import { IDepartment } from './department'
import { IOccupation } from './occupation'
import { IProductUsage } from './product'
import { IBaseEntity } from './response'

export interface IEmployee extends IBaseEntity {
  name: string
  cpf: string
  rg?: string
  register?: string
  occupationId?: string
  departmentId: string
  admissionDate?: string
  dismissalDate?: string
  linkedUser?: boolean

  occupation?: IOccupation
  department: IDepartment
}

export interface IEmployeeResponse extends IEmployee {
  accessGroup: IAccessGroupResponse
}

export interface IEmployeeEPIUsage {
  employee: IEmployee
  productUsages: IProductUsage[]
  company: {
    name: string
    branch: {
      name: string
      cnpj: string
    }
  }

  total: number
  totalLost: number
  totalReturned: number
  totalThrewAway: number
  totalUsing: number
}

export interface IEmployeeEPIResume {
  total: number
  totalLost: number
  totalReturned: number
  totalThrewAway: number
  totalUsing: number
}

export interface IEmployeeSelectOption {
  _id: string
  name: string
  cpf: string
  occupationName?: string
}
