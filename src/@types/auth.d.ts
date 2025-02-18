import { IUserResponse } from './user'

export interface ISignInResponse {
  code: number
  status: string
  message: string
  data: {
    token: string
    user: IUserResponse
  }
}

export interface IProfileResponse {
  code: number
  status: string
  message: string
  data: {
    user: IUserResponse
  }
}
