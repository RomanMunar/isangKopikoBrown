import db, { GIFT_TABLE } from '../db'
import { getBy } from '.'
import { v4 } from 'uuid'

export interface IGift {
  id: number | string
  vendor_id: String
  customer_id: String
  product_id: String
  message: string
}

export const getAllGifts = () => db.get(GIFT_TABLE).value()
export const getGiftBy = (key: keyof IGift, value: string | number) =>
  getBy(GIFT_TABLE, key, value)

export const createGift = (GiftDetails: Partial<IGift>) => {
  const Gift: IGift = {
    id: v4(),
    vendor_id: GiftDetails.vendor_id!,
    customer_id: GiftDetails.customer_id!,
    product_id: GiftDetails.product_id!,
    message: GiftDetails.message!,
  }
  saveGift(Gift)
  return Gift
}

const saveGift = (Gift: IGift) => {
  db.get(GIFT_TABLE).push(Gift).write()
}

export const updateGiftById = (
  GiftId: string | number,
  edits: Partial<IGift>
) => {
  const Gift = getGiftBy('id', GiftId)

  db.get(GIFT_TABLE).find(Gift).assign(edits).write()
}

export const removeGiftById = (GiftId: string | number) => {
  const Gift = getGiftBy('id', GiftId)

  db.get(GIFT_TABLE).remove(Gift).write()
}

export default IGift
