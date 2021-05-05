import * as yup from 'yup'
import { email, password, staySignedIn } from '../../../validations'

export const loginSchema = yup.object().shape({
  email,
  password,
  staySignedIn,
})

export const IfNoEmailFoundErrorMessage =
  'E-mail address not located. Please enter the e-mail address used during the onboarding process'

export const EmailNotMatchedWithPasswordErrorMessage =
  'E-mail address and password does not match. Please re-enter your password'
