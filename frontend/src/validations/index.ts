import * as yup from 'yup'

const lowercaseRegex = /(?=.*[a-z])/
const uppercaseRegex = /(?=.*[A-Z])/
const numericRegex = /(?=.*[0-9])/
const specialCharacterRegex = /(?=.*[!@#$%^&*+=])/

export const email = yup
  .string()
  .email('Must be a valid email')
  .required('Email field is required')

export const password = yup
  .string()
  .min(8, 'Minimum of 8 characters')
  .matches(lowercaseRegex, 'One lowercase character required')
  .matches(uppercaseRegex, 'One uppercase character required')
  .matches(numericRegex, 'One number character required')
  .matches(specialCharacterRegex, 'One special character required')
  .required('Password field is required')

export const password_confirmation = yup
  .string()
  .oneOf([yup.ref('password')], 'Passwords must match')
  .required('Password Confirmation is required')

export const role = yup
  .string()
  .oneOf(['FLUID_ADMIN', 'VENDOR_ADMIN', 'VENDOR_USER'], 'Must be a valid role')
  .required('A role is required')

export const staySignedIn = yup.boolean().required('Required')
