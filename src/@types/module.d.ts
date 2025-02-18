import { LucideIcon } from 'lucide-react'

export interface IModule {
  id: string
  href: string
  name: string
  moduleGroup: string
}

export interface IModuleGroup {
  id: string
  href: string
  name: string
  Icon: LucideIcon
  modules: IModule[]
}
