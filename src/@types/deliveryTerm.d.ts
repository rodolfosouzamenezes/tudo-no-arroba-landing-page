import { IBaseEntity } from './response'

export interface IDeliveryTerm extends IBaseEntity {
  productUsageId: Types.ObjectId
  deliveryDate: Date
  company: {
    name: string
  }
  branch: {
    name: string
    cnpj: string
  }
  employee: {
    name: string
    cpf: string
    occupation?: {
      name: string
      CBO?: string
    }
    department: string
    register?: string
    rg?: string
    signature?: string
    signatureDate?: string
    signatureIP?: string
  }
  responsible: {
    name: string
    cpf: string
    signature: string
  }
  product: {
    name: string
    variantName?: string
    ca?: string
    caExpiration?: Date
  }
}
