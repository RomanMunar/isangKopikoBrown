import path from 'path'
import fs from 'fs'
import { ICustomer, IGift, IOrder, IProduct, IUser, IVendor } from './models'
import FileSync from 'lowdb/adapters/FileSync'
import lowdb from 'lowdb'

export type DbSchema = {
  customers: ICustomer[]
  gifts: IGift[]
  orders: IOrder[]
  products: IProduct[]
  users: IUser[]
  vendors: IVendor[]
}

export const CUSTOMER_TABLE = 'customers'
export const GIFT_TABLE = 'gifts'
export const ORDER_TABLE = 'orders'
export const PRODUCT_TABLE = 'products'
export const USER_TABLE = 'users'
export const VENDOR_TABLE = 'vendors'

const databaseFile = path.join(__dirname, '../data/database.json')
const adapter = new FileSync<DbSchema>(databaseFile) // new File(...) throw errors on windows
const db = lowdb(adapter)

export const seedDatabase = () => {
  const testSeed = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), 'data', 'database-seed.json'),
      'utf-8'
    )
  )
  db.setState(testSeed).write()
  return
}

export default db
