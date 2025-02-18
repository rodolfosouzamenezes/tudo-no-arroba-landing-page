import { IAccessGroup, IAccessGroupResponse } from './accessGroup'
import { IEmployee } from './employee'
import { IProductUsage } from './product'
import { IAction } from './response'

export interface IBranch {
  _id: string
  name: string
  cnpj: string

  tenantId: string

  actions: IAction[]
  createdAt: Date
}

export interface IUser {
  _id: string
  email: string

  admin: boolean

  employeeId: string
  employee: IEmployee

  tenantId: string
  branchId: string
  accessGroupId: string
  accessGroup: IAccessGroup
  branchesIds: string[]
  branches: IBranch[]
  defaultSignature?: string

  active: boolean
  actions: IAction[]
  createdAt: Date
}

export interface IUserResponse extends IUser {
  accessGroup: IAccessGroupResponse
}

export interface IUserEPIUsage {
  employee: IUser
  productUsages: IProductUsage[]
  total: number
  totalLost: number
  totalReturned: number
  totalThrewAway: number
  totalUsing: number
}

export interface IUserSelectOption {
  _id: string
  name: string
}

export interface IChangePasswordPayload {
  currentPassword: string
  newPassword: string
  passwordConfirmation: string
}
