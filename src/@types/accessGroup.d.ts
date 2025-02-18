import { IModule } from './module'
import { IAction } from './response'

export interface IAccessGroup {
  _id: string
  name: string
  actions: IAction[]
  active: boolean
  branchId: string
  tenantId: string
  createdAt: Date
  modules: IModule[]
  home: IModule
}

export interface IAccessGroupResponse extends IAccessGroup {
  modules: string[]
  home: string
}

export interface IAccessGroupSelectOption {
  _id: string
  name: string
}
