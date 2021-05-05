import db, { CUSTOMER_TABLE } from '../db'
import { getBy } from '.'
import { v4 } from 'uuid'

interface ICustomer {
  id: number | string
  name: string
  address: string
  email: string
  vendor_id: string
}

export const getAllCustomers = () => db.get(CUSTOMER_TABLE).value()
export const getCustomerBy = (key: keyof ICustomer, value: string | number) =>
  getBy(CUSTOMER_TABLE, key, value)

export const createCustomer = (CustomerDetails: Partial<ICustomer>) => {
  const Customer: ICustomer = {
    id: v4(),
    name: CustomerDetails.name!,
    address: CustomerDetails.address!,
    email: CustomerDetails.email!,
    vendor_id: CustomerDetails.vendor_id!,
  }
  saveCustomer(Customer)
  return Customer
}

const saveCustomer = (customer: ICustomer) => {
  db.get(CUSTOMER_TABLE).push(customer).write()
}

export const updateCustomerById = (
  customerId: string | number,
  edits: Partial<ICustomer>
) => {
  const customer = getCustomerBy('id', customerId)

  db.get(CUSTOMER_TABLE).find(customer).assign(edits).write()
}

export const removeCustomerById = (customerId: string | number) => {
  const customer = getCustomerBy('id', customerId)

  db.get(CUSTOMER_TABLE).remove(customer).write()
}

export default ICustomer
