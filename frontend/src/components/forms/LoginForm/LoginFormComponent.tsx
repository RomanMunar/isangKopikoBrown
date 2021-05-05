import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { InlineError } from '../..'
import { loginSchema } from './LoginConstants'
import {
  LoginMutationVariables,
  useLoginMutation,
} from '../../../generated/graphql'
import { setLocalstorageJWT } from '../../../utils'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useAuth } from '../../../hooks'

const LoginFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: yupResolver(loginSchema), mode: 'onBlur' })
  const { addUser } = useAuth()
  const history = useHistory()

  const [login, { error }] = useLoginMutation({
    // This can be removed if we upgrade to @apollo/client@3.4.0-beta.23
    onError() {},
  })

  // already validated by the schema through the resolver
  const onSubmit = (variables: LoginMutationVariables) => {
    login({ variables }).then(({ data }) => {
      if (data?.login?.user) addUser({ payload: data?.login?.user })
      if (data?.login?.token) setLocalstorageJWT(data.login.token)
    })
    history.push('/')
    reset()
  }

  const onForgotPasswordClick = () => console.log('oh no..')

  return (
    <div className='max-w-xl p-5 m-5 mx-auto border rounded shadow bg-gray-50'>
      <h1 className='text-2xl font-bold text-center text-gray-800'>
        Login to Fluid Gift
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col justify-center my-4'>
          {error && <InlineError message={error.message} fieldID='inputs' />}
        </div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='w-full px-3 py-1.5 text-gray-900 placeholder-gray-500 border border-gray-300 rounded text-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10'
          placeholder='Email address'
          {...register('email')}
        />
        <InlineError message={errors.email?.message} fieldID='email' />
        <label htmlFor='password'>Password</label>
        <input
          className='w-full px-3 py-1.5 text-gray-900 placeholder-gray-500 border border-gray-300 rounded text-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10'
          type='password'
          {...register('password')}
        />
        <InlineError message={errors.password?.message} fieldID='password' />
        <button type='button' onClick={onForgotPasswordClick}>
          Forgot Password?
        </button>
        <div className='flex flex-row items-center space-x-2'>
          <input
            type='checkbox'
            id='Stay signed in'
            {...register('staySignedIn')}
          />
          <label className='text-gray-700 ' htmlFor='Stay signed in'>
            Stay signed in
          </label>
        </div>
        <button
          type='submit'
          className={clsx(
            isSubmitting && 'opacity-60',
            'flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
          )}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default LoginFormComponent
