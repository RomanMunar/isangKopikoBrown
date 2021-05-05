import { v4 } from 'uuid'
import db, { VENDOR_TABLE } from '../db'
import { getBy } from '.'

export interface IVendor {
  id: number | string
  name: string
  description: string
  user_id: number | string
}

export const getAllVendors = () => db.get(VENDOR_TABLE).value()
export const getVendorBy = (key: keyof IVendor, value: string | number) =>
  getBy(VENDOR_TABLE, key, value)

export const createVendor = (VendorDetails: Partial<IVendor>) => {
  const Vendor: IVendor = {
    id: v4(),
    name: VendorDetails.name!,
    description: VendorDetails.description!,
    user_id: VendorDetails.user_id!,
  }
  saveVendor(Vendor)
  return Vendor
}

const saveVendor = (vendor: IVendor) => {
  db.get(VENDOR_TABLE).push(vendor).write()
}

export const updateVendorById = (
  vendorId: string | number,
  edits: Partial<IVendor>
) => {
  const vendor = getVendorBy('id', vendorId)

  db.get(VENDOR_TABLE).find(vendor).assign(edits).write()
}

export const removeVendorById = (vendorId: string | number) => {
  const vendor = getVendorBy('id', vendorId)

  db.get(VENDOR_TABLE).remove(vendor).write()
}

export default IVendor
