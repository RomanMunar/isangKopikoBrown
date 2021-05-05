import db, { ORDER_TABLE } from '../db'
import { getBy } from '.'
import { v4 } from 'uuid'

export interface IOrder {
  id: number | string
  to_vendor_id: number | string
  from_vendor_id: number | string
  product_id: number | string
  message: string
}

export const getAllOrders = () => db.get(ORDER_TABLE).value()
export const getOrderBy = (key: keyof IOrder, value: string | number) =>
  getBy(ORDER_TABLE, key, value)

export const createOrder = (OrderDetails: Partial<IOrder>) => {
  const order: IOrder = {
    id: v4(),
    to_vendor_id: OrderDetails.to_vendor_id!,
    from_vendor_id: OrderDetails.from_vendor_id!,
    product_id: OrderDetails.product_id!,
    message: OrderDetails.message!,
  }
  saveOrder(order)
  return order
}

const saveOrder = (order: IOrder) => {
  db.get(ORDER_TABLE).push(order).write()
}

export const updateOrderById = (
  orderId: string | number,
  edits: Partial<IOrder>
) => {
  const order = getOrderBy('id', orderId)

  db.get(ORDER_TABLE).find(order).assign(edits).write()
}

export const removeOrderById = (orderId: string | number) => {
  const order = getOrderBy('id', orderId)

  db.get(ORDER_TABLE).remove(order).write()
}

export default IOrder
