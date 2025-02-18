import { IProduct, IProductType } from './product'
import { IBaseEntity } from './response'

export interface IProductDetails extends IBaseEntity {
  name: string
  code?: string | null
  price?: number | null
  quantityByOrder?: number | null
  CA?: string | null
  caExpirationDate?: string | null
  caExpired?: boolean
  caNextToExpires?: boolean

  productType?: IProductType

  productTypeId: string
  userId: string

  products?: IProduct[]
}

export interface IProductDetailsSelectOption {
  _id: string
  name: string
  epi: boolean
  approval: boolean
}
