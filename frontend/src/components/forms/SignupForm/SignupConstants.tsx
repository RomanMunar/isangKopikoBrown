import * as yup from 'yup'
import { email, password, password_confirmation } from '../../../validations'

export const signupSchema = yup.object().shape({
  email,
  password,
  password_confirmation,
})

export const EmailTakenErrorMessage =
  'E-mail address not located. Please enter the e-mail address used during the onboarding process'
