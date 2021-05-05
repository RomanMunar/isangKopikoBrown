import { IProduct } from '.'

export interface IOrder {
  id: number
  to_vendor_id: number
  from_vendor_id: number
  product: IProduct
  message: string
}

export default IOrder
