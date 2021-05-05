import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { InlineError } from '../..'
import { signupSchema } from './SignupConstants'
import {
  SignupMutationVariables,
  useSignupMutation,
} from '../../../generated/graphql'
import clsx from 'clsx'
import { setLocalstorageJWT } from '../../../utils'
import { useAuth } from '../../../hooks'
import { useHistory } from 'react-router'

const SignupFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(signupSchema), mode: 'onBlur' })
  const { addUser } = useAuth()
  const history = useHistory()
  const [signup, { loading, error }] = useSignupMutation({
    // This can be removed if we upgrade @apollo/client to 3.4.0-beta.23
    onError() {},
  })

  const onSubmit = (variables: SignupMutationVariables) => {
    signup({ variables }).then(({ data }) => {
      if (data?.signup?.user) addUser({ payload: data?.signup?.user })
      if (data?.signup?.token) setLocalstorageJWT(data.signup.token)
    })
    reset()
    history.push('/')
  }

  return (
    <div className='max-w-xl p-5 m-5 mx-auto border rounded shadow bg-gray-50'>
      <h1 className='text-2xl font-bold text-center text-gray-800'>
        Signup to Fluid Gift
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <div className='flex flex-col justify-center mx-auto my-4'>
            <InlineError message={error.message} fieldID='inputs' />
          </div>
        )}
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            autoComplete='email'
            required
            className='w-full px-3 py-1.5 text-gray-900 placeholder-gray-500 border border-gray-300 rounded text-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10'
            placeholder='Email address'
            {...register('email')}
          />
        </div>
        <div>
          <label htmlFor='role'>Role</label>
          <select
            id='role'
            className="block className='w-full px-3 py-1.5 text-gray-900  border border-gray-300 rounded text-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
            {...register('role')}
          >
            <option value='FLUID_ADMIN'>Super admin</option>
            <option value='VENDOR_ADMIN'>Vendor admin</option>
            <option value='VENDOR_USER'>Vndro user</option>
          </select>
          <InlineError message={errors.email?.message} fieldID='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            className='w-full px-3 py-1.5 text-gray-900 placeholder-gray-500 border border-gray-300 rounded text-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10'
            placeholder='Password'
            type='password'
            required
            {...register('password')}
          />
          <InlineError message={errors.password?.message} fieldID='password' />
        </div>
        <label htmlFor='password confirmation'>Password Confirmation</label>
        <input
          className='w-full px-3 py-1.5 text-gray-900 placeholder-gray-500 border border-gray-300 rounded text-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10'
          placeholder='Password confirmation'
          type='password'
          required
          {...register('password_confirmation')}
        />
        <InlineError
          message={errors.password_confirmation?.message}
          fieldID='password'
        />
        <button
          type='submit'
          className={clsx(
            loading && 'text-gray-100',
            'flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
          )}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default SignupFormComponent
