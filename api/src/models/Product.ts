import db, { PRODUCT_TABLE } from '../db'
import { getBy, getAllBy } from '.'
import { v4 } from 'uuid'

export interface IProduct {
  id: number | string
  name: string
  category: string
  description: string
  price: number
  stock: number
  vendor_id: number | string
}

export const getAllProducts = () => db.get(PRODUCT_TABLE).value()
export const getAllProductsByCategory = (category: string) =>
  getAllBy(PRODUCT_TABLE, 'category', category)
export const getProductBy = (key: keyof IProduct, value: string | number) =>
  getBy(PRODUCT_TABLE, key, value)

export const createProduct = (productDetails: Partial<IProduct>) => {
  const product: IProduct = {
    id: v4(),
    category: productDetails.category!,
    name: productDetails.name!,
    description: productDetails.description!,
    price: productDetails.price!,
    stock: productDetails.stock!,
    vendor_id: productDetails.vendor_id!,
  }
  saveProduct(product)
  return product
}

const saveProduct = (product: IProduct) => {
  db.get(PRODUCT_TABLE).push(product).write()
}

export const updateProductById = (
  productId: string | number,
  edits: Partial<IProduct>
) => {
  const product = getProductBy('id', productId)

  db.get(PRODUCT_TABLE).find(product).assign(edits).write()
}

export const removeProductById = (productId: string | number) => {
  const product = getProductBy('id', productId)

  db.get(PRODUCT_TABLE).remove(product).write()
}

export default IProduct
