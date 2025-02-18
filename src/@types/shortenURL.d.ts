import { IBaseEntity } from './response'
import { IUser } from './user'

export type ShortenUrlType = 'signature'

export interface IShortenURL extends IBaseEntity {
  expired?: boolean
  expirationDate?: string
  accessToken?: string
  url?: string
  userId?: string
  user?: IUser

  code: string
  type: ShortenUrlType
}
