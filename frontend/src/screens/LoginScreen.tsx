import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { LoginForm } from '../components'
import { useAuth } from '../hooks'

const LoginScreen = () => {
  const { authenticated } = useAuth()
  const history = useHistory()
  useEffect(() => {
    authenticated && history.push('/')
    // eslint-disable-next-line
  }, [authenticated])

  return (
    <div className='mx-auto '>
      <LoginForm />
    </div>
  )
}

export default LoginScreen
