import { REQUEST_STATUS_ENUM } from '@/mocks/request.mock'
import { IBaseEntity } from './response'
import { IUser, IUserResponse } from './user'
import { IEmployee, IEmployeeResponse } from './employee'
import { IDeliveryTerm } from './deliveryTerm'

export interface IProductType extends IBaseEntity {
  name: string
  approval: boolean
  epi: boolean
}

export interface IProductDetails extends IBaseEntity {
  name: string
  code?: string | null
  price?: number | null
  quantityByOrder?: number | null
  CA?: string | null
  caExpirationDate?: string | null
  caExpired?: boolean
  caNextToExpires?: boolean

  productsCount?: number
  productType?: IProductType

  productTypeId: string
  userId: string
}

export interface IProduct extends IBaseEntity {
  variantName?: string
  price: number
  code: string
  CA: string
  caExpirationDate: Date
  currentStock: number
  dailyDemand: number
  maxStock: number
  minStock: number
  quantityByOrder: number

  productDetails?: IProductDetails

  productDetailsId: string
  userId: string
}

export type IProductMovementType = 'output' | 'entry' | 'return'

export interface IProductMovement extends IBaseEntity {
  type: IProductMovementType
  quantity: number
  totalValue: number
  lifespan?: string
  productDetails: IProductDetails
  product: IProduct
  user: IUserResponse
  employee?: IEmployeeResponse

  productId: string
  userId: string
  employeeId?: string
}

export type IProductUsageStatus = 'using' | 'returned' | 'lost' | 'threwAway'

export interface IProductUsage extends IBaseEntity {
  status: IProductUsageStatus
  statusDates: {
    using: string
    _id: string
    [keyof: string]: string
  }
  nextToExpires: boolean
  expirationDate: string
  expired: boolean
  employeeSignature?: string
  responsibleSignature?: string

  deliveryTerm: IDeliveryTerm

  productId: string
  product: IProduct

  productDetailsId: string
  productDetails: IProductDetails

  productMovementId: string
  productMovement: IProductMovement

  employeeId: string
  employee: IEmployee

  userId: string
  user: IUser
}

export type IProductRequestStatus = keyof typeof REQUEST_STATUS_ENUM

export interface IProductRequest extends IBaseEntity {
  lifespan: Date
  totalValue: number
  quantity: number
  status: IProductRequestStatus
  statusDate: Date

  productDetails: IProductDetails
  product: IProduct
  employee: IUser
  manager: IUser

  productId: string
  employeeId: string
  managerId: string
}

export interface IProductSelectOption {
  _id: string
  name: string
  epi: boolean
  approval: boolean
}
