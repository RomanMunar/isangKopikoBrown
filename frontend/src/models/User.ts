export interface IUser {
  id: number | string
  email: string
  role: string
  password: string
  vendor_id?: string
}

export default IUser
