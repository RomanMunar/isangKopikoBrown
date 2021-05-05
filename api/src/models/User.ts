import db, { USER_TABLE } from '../db'
import { getBy, TokenPayload } from '.'
import { v4 } from 'uuid'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Error } from '../types'

const JWT_SECRET = 'SuperSecret'

export interface IUser {
  id: number | string
  email: string
  role: string
  password: string
  vendor_id?: string
}

export const getUserFromToken = (token: string) => {
  const realToken = token.split(' ')[1]
  // if (!realToken) throw Error('No token found in the header')
  if (!realToken) return

  let user = jwt.verify(realToken, 'JWT_SECRET') as TokenPayload

  // if (!user) throw Error('Token expired')
  if (!user) return

  return user
}

export const getAllUsers = () => db.get(USER_TABLE).value()
export const getUserBy = (key: keyof IUser, value: string | number): IUser =>
  getBy(USER_TABLE, key, value)

export const createUser = (userDetails: Partial<IUser>): IUser => {
  // const password = bcrypt.hashSync(userDetails.password!, 10)
  const user: IUser = {
    id: v4().toString(),
    email: userDetails.email!,
    role: userDetails.role!,
    password: userDetails.password!,
  }

  saveUser(user)
  return user
}

const saveUser = (user: IUser) => {
  db.get(USER_TABLE).push(user).write()
}

export const updateUserById = (
  userId: string | number,
  edits: Partial<IUser>
) => {
  const user = getUserBy('id', userId)

  db.get(USER_TABLE).find(user).assign(edits).write()
}

export const removeUserById = (userId: string) => {
  const user = getUserBy('id', userId)

  db.get(USER_TABLE).remove(user).write()
}

export interface SignupInput {
  email: string
  role: string
  password: string
  password_confirmation: string
}

export interface LoginInput {
  email: string
  password: string
}

export const login = async ({
  email,
  password,
}: LoginInput): Promise<{
  user: IUser | null
  token: string | null
  errors: Error[] | null
}> => {
  const user = getUserBy('email', email)
  if (!user) throw Error('Email and password does not match')
  // The passwords on the database.json is not hashed So...
  // let isMatch = await bcrypt.compare(password, user.password)
  let isMatch = password === user.password

  if (isMatch != true) throw Error('Email and password does not match')

  const payload: TokenPayload = {
    email: user.email,
    role: user.role,
    id: user.id,
  }

  let token = await jwt.sign(payload, 'JWT_SECRET', { expiresIn: 360000 })
  return { user, token, errors: null }
}

export const signup = async ({
  email,
  role,
  password,
  password_confirmation,
}: SignupInput) => {
  if (password !== password_confirmation)
    throw Error('Passwords did not matched')

  const userExists = getUserBy('email', email)
  if (userExists) throw Error('Email taken')

  const newUser = createUser({ email, role, password })

  const payload: TokenPayload = {
    email: newUser.email,
    role: newUser.role,
    id: newUser.id,
  }

  let token = await jwt.sign(payload, 'JWT_SECRET', { expiresIn: 360000 })
  return { user: newUser, token }
}

export default IUser
