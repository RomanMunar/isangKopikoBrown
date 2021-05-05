import db, { DbSchema } from '../db'

export interface TokenPayload {
  email: string
  role: string
  id: string | number
}

export const getAllBy = (entity: keyof DbSchema, key: string, value: any) => {
  const result = db
    .get(entity)
    // @ts-ignore
    .filter({ [`${key}`]: value })
    .value()

  return result
}

export const getBy = (entity: keyof DbSchema, key: string, value: any) => {
  const result = db
    .get(entity)
    // @ts-ignore
    .find({ [`${key}`]: value })
    .value()

  return result
}

export type { default as ICategory } from './Category'
export * from './Category'

export type { default as ICustomer } from './Customer'
export * from './Customer'

export type { default as IGift } from './Gift'
export * from './Gift'

export type { default as IOrder } from './Order'
export * from './Order'

export type { default as IProduct } from './Product'
export * from './Product'

export type { default as IUser } from './User'
export * from './User'

export type { default as IVendor } from './Vendor'
export * from './Vendor'
