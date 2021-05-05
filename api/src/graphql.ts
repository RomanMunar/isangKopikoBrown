import { gql } from 'apollo-server-core'
import { IResolvers } from 'graphql-tools'
import {
  login as userLogin,
  signup as userSignin,
  getAllCustomers,
  getAllGifts,
  getAllOrders,
  getAllProducts,
  getAllUsers,
  getAllVendors,
  getCustomerBy,
  getGiftBy,
  getOrderBy,
  getProductBy,
  getUserBy,
  getVendorBy,
  removeUserById,
  createProduct,
  updateProductById,
  removeProductById,
  updateCustomerById,
  createCustomer,
  removeCustomerById,
  createVendor,
  updateVendorById,
  removeVendorById,
  createOrder,
  updateOrderById,
  removeOrderById,
  createGift,
  updateGiftById,
  removeGiftById,
  LoginInput,
  SignupInput,
} from './models'
import { ICustomer, IGift, IOrder, IProduct, IUser, IVendor } from './models'
import { MyContext } from './types'

export const typeDefs = gql`
  type Product {
    id: String
    name: String
    vendor_id: String
    category: String
    description: String
    price: Int
    stock: Int
  }

  input ProductInput {
    name: String
    vendor_id: String
    category: String
    description: String
    price: Int
    stock: Int
  }

  type Vendor {
    id: String
    name: String
    description: String
  }

  input VendorInput {
    name: String
    description: String
  }

  type User {
    id: String
    email: String
    role: String
    password: String
    vendor_id: String
  }

  input SignupInput {
    email: String
    role: String
    password: String
    password_confirmation: String
  }

  input LoginInput {
    email: String
    password: String
  }

  type Order {
    id: String
    to_vendor_id: String
    from_vendor_id: String
    product_id: String
    message: String
  }

  input OrderInput {
    id: String
    product: String
    message: String
  }

  type Gift {
    id: String
    vendor_id: String
    customer_id: String
    product_id: String
    message: String
  }

  input GiftInput {
    id: String
    vendor_id: String
    customer_id: String
    product_id: String
    message: String
  }

  type Customer {
    id: String
    name: String
    address: String
    email: String
    vendor_id: String
  }

  input CustomerInput {
    id: String
    name: String
    address: String
    email: String
    vendor: String
  }

  type MeQueryResponse {
    user: User
  }

  type Query {
    me: User
    user(id: String!): User
    users: [User]
    products: [Product]
    product(id: String!): Product
    vendors: [Vendor]
    vendor(id: String!): Vendor
    orders: [Order]
    order(id: String!): Order
    gifts: [Gift]
    gift(id: String!): Gift
    customers: [Customer]
    customer(id: String!): Customer
  }

  type LoginMutationResponse {
    user: User
    token: String
  }

  type SignupMutationResponse {
    user: User
    token: String
  }

  type Mutation {
    removeUser(id: String!): String
    createProduct(product: ProductInput): Product
    updateProduct(product: ProductInput): Product
    removeProduct(id: String!): String
    createCustomer(customer: CustomerInput): Customer
    updateCustomer(customer: CustomerInput): Customer
    removeCustomer(id: String!): String
    createVendor(vendor: VendorInput): Vendor
    updateVendor(vendor: VendorInput): Vendor
    removeVendor(id: String!): String
    createOrder(order: OrderInput): Order
    updateOrder(order: OrderInput): Order
    removeOrder(id: String!): String
    createGift(gift: GiftInput): Gift
    updateGift(gift: GiftInput): Gift
    removeGift(id: String!): String
    checkAuth: String
    logout: String
    login(authInput: LoginInput): LoginMutationResponse
    signup(signupInput: SignupInput): SignupMutationResponse
  }
`

export const resolvers: IResolvers = {
  Query: {
    me: (_, __, { user }: MyContext) => user,
    users: () => getAllUsers(),
    user: (_, { id }) => getUserBy('id', id),
    products: () => getAllProducts(),
    product: (_, { id }) => getProductBy('id', id),
    customers: () => getAllCustomers(),
    customer: (_, { id }) => getCustomerBy('id', id),
    vendor: (_, { id }) => getVendorBy('id', id),
    vendors: () => getAllVendors(),
    orders: () => getAllOrders(),
    order: (_, { id }) => getOrderBy('id', id),
    gifts: () => getAllGifts(),
    gift: (_, { id }) => getGiftBy('id', id),
  },
  Mutation: {
    removeUser: (_, { id }: { id: string }) => removeUserById(id),
    createProduct: (_, { product }: { product: Partial<IProduct> }) =>
      createProduct(product),
    updateProduct: (_, { product }: { product: IProduct }) =>
      updateProductById(product.id, product),
    removeProduct: (_, { id }: { id: string }) => removeProductById(id),
    createCustomer: (_, { customer }: { customer: Partial<ICustomer> }) =>
      createCustomer(customer),
    updateCustomer: (_, { customer }: { customer: ICustomer }) =>
      updateCustomerById(customer.id, customer),
    removeCustomer: (_, { id }: { id: string }) => removeCustomerById(id),
    createVendor: (_, { vendor }: { vendor: Partial<IVendor> }) =>
      createVendor(vendor),
    updateVendor: (_, { vendor }: { vendor: IVendor }) =>
      updateVendorById(vendor.id, vendor),
    removeVendor: (_, { id }: { id: string }) => removeVendorById(id),
    createOrder: (_, { order }: { order: Partial<IOrder> }) =>
      createOrder(order),
    updateOrder: (_, { order }: { order: IOrder }) =>
      updateOrderById(order.id, order),
    removeOrder: (_, { id }: { id: string }) => removeOrderById(id),
    createGift: (_, { gift }: { gift: Partial<IGift> }) => createGift(gift),
    updateGift: (_, { gift }: { gift: IGift }) => updateGiftById(gift.id, gift),
    removeGift: (_, { id }: { id: string }) => removeGiftById(id),
    login: (_, { authInput }: { authInput: LoginInput }, { user }: MyContext) =>
      userLogin(authInput),
    signup: (_, { signupInput }: { signupInput: SignupInput }) =>
      userSignin(signupInput),
    logout: () => {
      return 'delete mo yung token sa header at sa localstorage nuba'
    },
  },
}
