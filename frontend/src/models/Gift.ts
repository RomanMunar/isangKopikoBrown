import { IProduct, IVendor, ICustomer } from '.'

export interface IGift {
  id: number
  vendor: IVendor
  customer: ICustomer
  product: IProduct
  message: string
}

export default IGift
