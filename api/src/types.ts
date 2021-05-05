// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IUser } from '../src/models'
import { Request, Response } from 'express'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface User extends IUser {}
  }
}

export interface Error {
  path: [string]
  message: string
  status: string
  code: number
}

export type MyContext = {
  user: { email: string; role: string; id: string | number }
}
